import App from "./App.svelte";
import "./lib/TailwindCSS.svelte"

const app = new App({
  target: document.getElementById("app"),
});

export default app;
