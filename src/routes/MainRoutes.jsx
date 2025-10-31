import React, { lazy } from "react";

// project import
import App from "../App";
import Loadable from "./Loader/Loadable";

// Lazy-loaded components

// -------{Public Side}------- //
const Home = Loadable(lazy(() => import("../views/home")));
const About = Loadable(lazy(() => import("../views/about")));
const Projects = Loadable(lazy(() => import("../views/projects")));
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
  ],
};

// ########################################################

export { MainRoutes };
