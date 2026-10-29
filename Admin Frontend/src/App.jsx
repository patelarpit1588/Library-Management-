import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import Login from "./pages/Login"
import AddBook from "./pages/AddBook";
import Books from "./pages/Books";
import EditBook from "./pages/EditBook"
import ViewBook from "./pages/ViewBook";
import Logout from "./pages/Logout";
import IssueBook from "./pages/IssueBook";
import Users from "./pages/Users";
import AdminProfile from "./pages/AdminProfile";
import Queries from "./pages/Queries";
import Reply from "./pages/Reply";
import AdminDashboard from "./pages/AdminDashboard";

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
  },{
    path : "/logout",
    element : <Logout />
  },
  {
    path : "/issuebook",
    element : <IssueBook />
  },
  {
    path : "/users",
    element : <Users />
  },
  {
    path : "/profile",
    element : <AdminProfile />
  },
  {
    path : "/queries",
    element : <Queries />
  },
  {
    path : "/reply/:id",
    element : <Reply />
  },
   {
      path: "/dashboard",
      element: <AdminDashboard />
    },

]);
  return (
    <>
    <Outlet />
    <RouterProvider router={router} />
    </>
  )
}

export default App
