import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Root from "../root/Root";
import Login from "../components/Login";
import Register from "../components/Register";
import Games from "../pages/Games";
import GameDetails from "../pages/GameDetails";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
        {
            path: "/",
            element:<Home />, 
            },
            {
                path: "login",
                element: <Login />,
              },
              {
                path: "register",
                element: <Register />,
              },
              {
                path: "games",
                element: <Games />,
              },
              {
                path:"gamedetails",
                element: <GameDetails />,
              }
    ]
  },
]);