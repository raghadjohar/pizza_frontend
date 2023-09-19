import { useRoutes } from "react-router-dom";
import React from "react";
import Header from "../Header";
import About from "../NavbarComponent/About";
import Contact from "../NavbarComponent/Contact";
import Login from "../NavbarComponent/Login";
import Menu from "../NavbarComponent/Menu";
import Basket from "../NavbarComponent/Basket";
import Signin from "../NavbarComponent/Signin";


export const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Header />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },

    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/log-in",
      element: <Login />,
    },
    
    {
      path: "/basket",
      element: <Basket />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },

  ]);
  return routes;
};
