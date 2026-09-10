import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import Login from "./pages/Login"
import AddBook from "./pages/AddBook";
import Books from "./pages/Books";
import EditBook from "./pages/EditBook"
import ViewBook from "./pages/ViewBook";

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/addbook",
    element: <AddBook />
  },
  {
    path: "/books",
    element: <Books />
  },{
    path: "/editbook/:id",
    element : <EditBook />
  },{
    path : "/viewbook/:id",
    element : <ViewBook />
  }
]);
  return (
    <>
    <Outlet />
    <RouterProvider router={router} />
    </>
  )
}

export default App
