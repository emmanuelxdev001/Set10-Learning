import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import MainScreen from "../MainScreen";
import { EconomicDataChart } from "@/chart/EconomicDataChart";
import { MigrationDataChart } from "@/chart/MigrationDataChart";
import { PopulationDataChart } from "@/chart/PopulationDataChart";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainScreen />,
      },

      {
        index: true,
        path: "economic",
        element: <EconomicDataChart />,
      },

      {
        index: true,
        path: "migrant",
        element: <MigrationDataChart />,
      },

      {
        index: true,
        path: "population",
        element: <PopulationDataChart />,
      },
    ],
  },
]);
