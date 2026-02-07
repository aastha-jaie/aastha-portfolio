import fs from "node:fs/promises";
import path from "node:path";
import express from "express";
import { fileURLToPath } from "node:url";
import { createServer as createViteServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.argv.includes("--prod") || process.env.NODE_ENV === "production";
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const baseUrl = (process.env.BASE_PATH || "/").replace(/\/?$/, "/");

const app = express();
let vite;

if (!isProd) {
  vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
    base: baseUrl,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import("compression")).default;
  const sirv = (await import("sirv")).default;
  app.use(compression());
  app.use(
    baseUrl,
    sirv(path.resolve(__dirname, "dist/client"), {
      extensions: [],
    })
  );
}

app.use("*", async (req, res) => {
  const url =
    baseUrl !== "/" && req.originalUrl.startsWith(baseUrl)
      ? req.originalUrl.slice(baseUrl.length - 1)
      : req.originalUrl;

  try {
    let template;
    let render;

    if (!isProd) {
      template = await fs.readFile(path.resolve(__dirname, "index.html"), "utf-8");
      template = await vite.transformIndexHtml(url, template);
      ({ render } = await vite.ssrLoadModule("/src/entry-server.tsx"));
    } else {
      template = await fs.readFile(path.resolve(__dirname, "dist/client/index.html"), "utf-8");
      ({ render } = await import("./dist/server/entry-server.js"));
    }

    const appHtml = await render(url);
    const html = template.replace("<!--ssr-outlet-->", appHtml);

    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  } catch (error) {
    if (!isProd && vite) {
      vite.ssrFixStacktrace(error);
    }
    console.error(error);
    res.status(500).end("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
