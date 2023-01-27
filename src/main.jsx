import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#edeefe",
      100: "#e8d3fe",
      200: "#e3c9fd",
      300: "#cfa1fc",
      400: "#c084fb",
      500: "#ae61fa",
      600: "#a046f9",
      700: "#8513f8",
      800: "#5905ad",
      900: "#39036f",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
