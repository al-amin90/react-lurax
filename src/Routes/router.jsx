import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            }
        ]
    },
]);

export default router;