/// <reference lib="deno.ns" />
import { createWebView } from "jsr:@justbe/webview";
import * as posix from "jsr:@std/path/posix";
import { serveDir } from "jsr:@std/http/file-server";

const DEVELOPMENT = Deno.env.get("DENO_ENV") === "development";

// serve dist folder
if (!DEVELOPMENT) {
  Deno.serve((req) => {
    return serveDir(req, {
      fsRoot: posix.join(import.meta.dirname!, "/dist/web"),
    });
  });
}

using webview = await createWebView({
  title: "Game",
  url: DEVELOPMENT ? "http://localhost:5173" : "http://localhost:8000",
  devtools: true, // seems wrong binary is used on windows if this is false
  size: {
    width: 1280,
    height: 720,
  },
});

await webview.waitUntilClosed();
