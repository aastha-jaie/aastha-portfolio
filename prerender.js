import fs from "node:fs/promises";
import path from "node:path";

const toAbsolute = (p) => path.resolve(process.cwd(), p);

const template = await fs.readFile(toAbsolute("dist/client/index.html"), "utf-8");
const { render } = await import(toAbsolute("dist/server/entry-server.js"));

const routes = ["/"];

for (const url of routes) {
  const appHtml = await render(url);
  const html = template.replace("<!--ssr-outlet-->", appHtml);
  const filePath = url === "/" ? "dist/client/index.html" : `dist/client${url}/index.html`;
  await fs.mkdir(path.dirname(toAbsolute(filePath)), { recursive: true });
  await fs.writeFile(toAbsolute(filePath), html, "utf-8");
}
