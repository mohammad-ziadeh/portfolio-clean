import React, { lazy } from "react";

// project import
import App from "../App";
import Loadable from "./Loader/Loadable";

// Lazy-loaded components

// -------{Public Side}------- //
const Home = Loadable(lazy(() => import("../views/home")));
const About = Loadable(lazy(() => import("../views/about")));
const Projects = Loadable(lazy(() => import("../views/projects")));
const Contact = Loadable(lazy(() => import("../views/contact")));
const Practices = Loadable(lazy(() => import("../views/Practices")));
// -------{Public Side}------- //

// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: "",
  element: <App />,
  children: [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "About",
      element: <About />,
    },
    {
      path: "Projects",
      element: <Projects />,
    },
    {
      path: "Contact",
      element: <Contact />,
    },
    {
      path: "Practices",
      element: <Practices />,
    },
  ],
};

// ########################################################

export { MainRoutes };
