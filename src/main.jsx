import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

//layouts
import Root from "./layouts/root";
import LoginSignupLayout from "./layouts/login-signup";

//pages
import ErrorPage from "./pages/error-page";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import Men from "./pages/men";
import Women from "./pages/women";
import ProductsList from "./pages/product-list";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <LoginSignupLayout />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/signup",
            element: <SignUp />,
          },
        ],
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/products",
        element: <ProductsList />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
