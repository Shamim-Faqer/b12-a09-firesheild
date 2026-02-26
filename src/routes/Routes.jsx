import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Root from "../root/Root";
import Login from "../components/Login";
import Register from "../components/Register";
import Games from "../pages/Games";
import GameDetails from "../pages/GameDetails";
import PrivateRoutes from "./PrivateRoutes";
import Aboutme from "../components/Aboutme";
import Contactus from "../components/Contactus";





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
                path:"gamedetails/:id",
                element:(
                  <PrivateRoutes>
                     <GameDetails />
                  </PrivateRoutes>
                ),
              },
              {
                path:"about",
                element: <Aboutme />,
              },
              {
                path:"contact",
                element:<Contactus />,
              },
    ]
  },
]);