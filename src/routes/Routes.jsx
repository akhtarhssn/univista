import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import CollegeDetails from "../components/College/CollegeDetails";
import College from "../pages/College/College";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

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
        loader: () => fetch("http://localhost:5000/colleges"),
      },
      {
        path: "college/:id",
        element: <CollegeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/colleges/${params.id}`),
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
