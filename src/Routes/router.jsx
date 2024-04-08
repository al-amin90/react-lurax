import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import SingUp from "../Pages/SingUp/SingUp";
import Login from "../Pages/LogIn/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/singup',
                element: <SingUp></SingUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
]);

export default router;