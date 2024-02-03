import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import UserDetails from "../Pages/UserDetails/UserDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <UserDetails />
            },
            {
                path: "/register",
                element: <Registration />
            },
            {
                path: "/login",
                element: <Login />
            },
        ]
    },
]);

export default router;