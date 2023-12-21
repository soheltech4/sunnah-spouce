import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import SignUp from "../Pages/Shared/Sign Up/SignUp";
import Biodata from "../Pages/Biodata/Biodata";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layouts/Dashboard";
import Myprfile from "../Pages/Dashboard/Myprfile";
import Editbiodata from "../Pages/Dashboard/Editbiodata";
import UserDetails from "../Pages/Biodata/UserDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/biodata",
        element: <Biodata></Biodata>
      },
      {
        path: "/users/:_id",
        element: <UserDetails></UserDetails>,
        loader: ({params}) => fetch(`https://sunnahspouse-server.vercel.app/users/${params._id}`)
      },
      {
        path: "/dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children :[
          {
            path: "myprofile",
            element: <Myprfile></Myprfile>
          },
          {
            path: "edit-biodata",
            element: <Editbiodata></Editbiodata>
          },
        ]
      }
    ]
  }
]);


