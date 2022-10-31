import { createBrowserRouter } from "react-router-dom";
import AddUser from "../components/AddUser";
import Home from "../components/Home";
import Update from "../components/Update";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "/users/add",
        element: <AddUser></AddUser>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.id}`),
      },
    ],
  },
]);