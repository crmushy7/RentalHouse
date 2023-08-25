import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient=new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:5*1000,
    }
  }
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false}/>
          <App />
        </QueryClientProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
