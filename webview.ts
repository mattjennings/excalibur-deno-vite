/// <reference lib="deno.ns" />
import { createWebView } from "jsr:@justbe/webview";
const DEVELOPMENT = Deno.env.get("DENO_ENV") === "development";

// serve dist folder
if (!DEVELOPMENT) {
  new Worker(
    new URL("./webview-server.ts", import.meta.url).href,
    {
      type: "module",
    },
  );
}

using webview = await createWebView({
  title: "Game",
  url: DEVELOPMENT ? "http://localhost:5173" : "http://localhost:8000",
  devtools: DEVELOPMENT,
  size: {
    width: 1280,
    height: 720,
  },  
});


await webview.waitUntilClosed();