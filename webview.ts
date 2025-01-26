/// <reference lib="deno.ns" />
import { createWebView } from "jsr:@justbe/webview";
import { Hono } from "jsr:@hono/hono@4.6.19"
import { serveStatic } from 'jsr:@hono/hono@4.6.19/deno'
import * as posix from "jsr:@std/path/posix";


const DEVELOPMENT = Deno.env.get("DENO_ENV") === "development";

// serve dist folder
if (!DEVELOPMENT) {
  const app = new Hono()

  app.use('*', serveStatic({ root: posix.join(import.meta.dirname!, '/dist/web') }))
  app.get('*', serveStatic({ path: posix.join(import.meta.dirname!, '/dist/web/index.html') }))
  Deno.serve(app.fetch)
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