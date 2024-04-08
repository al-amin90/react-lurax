import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import SingUp from "../Pages/SingUp/SingUp";
import Login from "../Pages/LogIn/Login";
import LuxuryStateDetails from "../Pages/LuxuryStateDetails/LuxuryStateDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch('/sagments.json')
            },
            {
                path: '/singup',
                element: <SingUp></SingUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/state/:id',
                element: <LuxuryStateDetails></LuxuryStateDetails>,
                loader: () => fetch('/sagments.json')
            }
        ]
    },
]);

export default router;