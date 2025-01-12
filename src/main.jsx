import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";
import { HelmetProvider } from "react-helmet-async";
import Authprovider from "./Providers/AuthProvider/Authprovider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Authprovider>
  </StrictMode>
);
