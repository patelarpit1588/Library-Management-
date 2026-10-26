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

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/logout",
      element: <Logout />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/viewbook/:id",
      element: <Viewbook />
    },
    {
      path: "/books",
      element: <Books />
    },
    {
      path: "/profile",
      element: <UserProfile />
    },
    {
      path: "/mybooks",
      element: <MyBooks />
    },
    {
      path: "/profile",
      element: <UserProfile />
    },
    {
      path: "/contact",
      element: <ContactUs />
    },



  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
