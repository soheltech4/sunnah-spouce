import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import SignUp from "../Pages/Shared/Sign Up/SignUp";
import AllClass from "../Pages/All Class/AllClass";
import Dashboard from "../Layouts/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import InstructorDetials from "../Pages/Home/Instructor/InstructorDetials";
import ClassDetails from "../Class Details/ClassDetails";

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
        path: "/allclass",
        element: <AllClass></AllClass>
      },
      {
        path: '/allclass/:_id',
        element: <ClassDetails></ClassDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/allclass/${params._id}`)
      },
      {
        path: '/allinstructor/:_id',
        element: <InstructorDetials></InstructorDetials>,
        loader: ({ params }) => fetch(`http://localhost:5000/allinstructor/${params._id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard/mycart',
        element: <MyCart></MyCart>
      }
    ]
  }
]);


