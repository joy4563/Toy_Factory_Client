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
import PrivateRoute from "./PrivateRoute";
import AllToyDetails from "../components/AllToyDetails";
import UpdateToy from "../components/UpdateToy";
import CategoryDetails from "../components/CategoryDetails";

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
                path: "/:id",
                element: (
                    <PrivateRoute>
                        {" "}
                        <CategoryDetails></CategoryDetails>
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch("toys.json"),
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
                path: "/allToys/:id",
                element: (
                    <PrivateRoute>
                        <AllToyDetails></AllToyDetails>
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://b7a11-toy-marketplace-server-side-joy4563-joy4563.vercel.app/allToys/${params.id}`
                    ),
            },
            {
                path: "/myToys",
                element: <MyToys></MyToys>,
            },
            {
                path: "/myToys/:id",
                element: <UpdateToy></UpdateToy>,
                loader: ({ params }) =>
                    fetch(
                        `https://b7a11-toy-marketplace-server-side-joy4563-joy4563.vercel.app/allToys/${params.id}`
                    ),
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
