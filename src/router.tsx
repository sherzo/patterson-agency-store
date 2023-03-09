import React from "react";
import { Layout } from "./components/Layout";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home";
import { CartPage } from "./pages/cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);
