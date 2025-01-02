import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Menu from "../Pages/Menu/Menu/Menu";
import Oder from "../Pages/Oder/Oder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/oder",
    element: <Oder />,
  },
]);

export default router;
