import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Menu from "../Pages/Menu/Menu/Menu";
import Oder from "../Pages/Oder/Oder";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoute from "./PrivetRoute";

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
    path: "/oder/:category",
    element: <Oder />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/secret",
    element: (
      <PrivetRoute>
        <h1>i am the secret</h1>
      </PrivetRoute>
    ),
  },
]);

export default router;
