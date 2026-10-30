import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Viewbook from "./pages/Viewbook"
import Books from "./pages/Books"
import Logout from "./pages/Logout"
import UserProfile from "./pages/UserProfile"
import MyBooks from "./pages/MyBooks"
import ContactUs from "./pages/ContactUs"
import MyQueries from "./pages/MyQueries"
import ProtectedRoutes from "./ProtectedRoutes"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element:<Login />
    },
    {
      path: "/logout",
      element: <ProtectedRoutes><Logout /></ProtectedRoutes>
    },
    {
      path: "/signup",
      element: <ProtectedRoutes><Signup /></ProtectedRoutes>  
    },
    {
      path: "/viewbook/:id",
      element: <ProtectedRoutes><Viewbook /></ProtectedRoutes>
    },
    {
      path: "/books",
      element: <ProtectedRoutes><Books /></ProtectedRoutes>
    },
    {
      path: "/profile",
      element: <ProtectedRoutes><UserProfile /></ProtectedRoutes>
    },
    {
      path: "/mybooks",
      element: <ProtectedRoutes><MyBooks /></ProtectedRoutes>
    },
    {
      path: "/contact",
      element: <ProtectedRoutes><ContactUs /></ProtectedRoutes>
    },
    {
      path: "/myqueries",
      element: <ProtectedRoutes><MyQueries /></ProtectedRoutes>
    },
   
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
