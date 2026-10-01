import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Viewbook from "./pages/Viewbook"
import Books from "./pages/Books"

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



  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
