import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { router } from "./app/router";

import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <>
    <RouterProvider router={router} />

    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#111827",
          color: "#fff",
          border: "1px solid rgba(255,255,255,.1)",
        },
      }}
    />
  </>
);