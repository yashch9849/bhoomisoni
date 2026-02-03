import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element #root not found");

try {
  createRoot(rootEl).render(<App />);
} catch (err) {
  rootEl.innerHTML = `
    <div style="padding:2rem;font-family:sans-serif;text-align:center;color:#c00;">
      <h1>Something went wrong</h1>
      <pre style="text-align:left;overflow:auto;">${err instanceof Error ? err.message : String(err)}</pre>
    </div>
  `;
  console.error(err);
}
