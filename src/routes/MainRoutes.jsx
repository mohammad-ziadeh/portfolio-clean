import React, { lazy } from "react";

// project import
import App from "../App";
import Loadable from "./Loader/Loadable";

// Lazy-loaded components


// ----
// -------{Public Side}------- //
// ----

const Home = Loadable(lazy(() => import("../views/home")));
const About = Loadable(lazy(() => import("../views/about")));
const Projects = Loadable(lazy(() => import("../views/projects")));
const Contact = Loadable(lazy(() => import("../views/contact")));

// -- {practices pages} -- //
const Practices = Loadable(lazy(() => import("../views/practices")));
const GSAP = Loadable(lazy(() => import("../components/practices/gsapScroll")));
const Motion = Loadable(lazy(() => import("../components/practices/motion")));
// -- {practices pages} -- //



// ----
// -------{Public Side}------- //
// ----

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
      path: "Tests",
      element: <Practices />,
      children: [
        {
          path: "gsap",
          element: <GSAP />,
        },
        {
          path: "motion",
          element: <Motion />,
        },
      ]
    },
  ],
};

// ########################################################

export { MainRoutes };
