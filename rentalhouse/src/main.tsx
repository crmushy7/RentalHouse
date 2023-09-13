import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";

import { Notifications } from "@mantine/notifications";
import { PrimeReactProvider } from "primereact/api";
import { ToastContainer } from "react-toastify";
import { ModalsProvider } from "@mantine/modals";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <QueryClientProvider client={queryClient}>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          <ChakraProvider>
            <PrimeReactProvider>
              <Notifications position="top-center" />
              <ModalsProvider>
                <App />
              </ModalsProvider>
              <ToastContainer />
            </PrimeReactProvider>
          </ChakraProvider>
        </QueryClientProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
