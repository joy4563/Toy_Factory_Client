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
                element: <CategoryDetails></CategoryDetails>,
                loader:({params})=>fetch('toys.json')
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
                element: <AllToyDetails></AllToyDetails>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/allToys/${params.id}`),
            },
            {
                path: "/myToys",
                element: <MyToys></MyToys>,
            },
            {
                path: "/myToys/:id",
                element: <UpdateToy></UpdateToy>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/allToys/${params.id}`),
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
