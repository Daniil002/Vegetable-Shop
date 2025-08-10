import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import App from "./App.tsx";
import { CartProvider } from "./context/CartContext.tsx";

createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <MantineProvider>
      <App />
    </MantineProvider>
  </CartProvider>
);
