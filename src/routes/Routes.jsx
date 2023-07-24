import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import College from "../pages/College/College";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CollegeDetails from "../pages/CollegeDetails/CollegeDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "college",
        element: <College />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/colleges`),
      },
      {
        path: "college/:id",
        element: <CollegeDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/colleges/${params.id}`),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);
