import { WebView } from "https://deno.land/x/webview/mod.ts";

const server = new Worker("./worker.ts", { type: "module", deno: true });

server.onmessage = async (e) => {
  console.log(e.data);

  await new WebView({
    title: "Local deno_webview example",
    url: "http://localhost:8000/",
    width: 800,
    height: 600,
    resizable: true,
    debug: true,
    frameless: false,
  }).run();
};