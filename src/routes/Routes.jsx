import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import AllToys from "../components/AllToys";
import MyToys from "../components/MyToys";
import AddToy from "../components/AddToy";
import Blogs from "../components/Blogs";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/allToys",
                element: <AllToys></AllToys>,
            },
            {
                path: "/myToys",
                element: <MyToys></MyToys>,
            },
            {
                path: "/addToy",
                element: <AddToy></AddToy>,
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
            },
        ],
    },
]);

export default router;
