/// <reference lib="deno.ns" />
import { SizeHint, Webview } from "jsr:@webview/webview";

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

const webview = new Webview(DEVELOPMENT, {
  width: 1280,
  height: 720,
  hint: SizeHint.FIXED,
});

if (DEVELOPMENT) {
  webview.navigate(`http://localhost:5173`);
} else {
  webview.navigate(`http://localhost:8000`);
}
webview.run();