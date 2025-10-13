import React, { lazy } from "react";

// project import
import App from "../App";
import Loadable from "./Loader/Loadable";

// Lazy-loaded components

// -------{Public Side}------- //
const Home = Loadable(lazy(() => import("../views/home")));
// const LMC = Loadable(lazy(() => import("../components/pages/LMC")));
// const Fiba = Loadable(lazy(() => import("../components/pages/Fiba")));
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
    // {
    //   path: "LMC",
    //   element: <LMC />,
    // },
    // {
    //   path: "Fiba",
    //   element: <Fiba />,
    // },
  ],
};

// ########################################################

export { MainRoutes };
