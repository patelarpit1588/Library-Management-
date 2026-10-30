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
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/addbook",
    element: <ProtectedRoutes><AddBook /></ProtectedRoutes>
  },
  {
    path: "/books",
    element: <ProtectedRoutes><Books /></ProtectedRoutes>
  },{
    path: "/editbook/:id",
    element : <ProtectedRoutes><EditBook /></ProtectedRoutes>
  },{
    path : "/viewbook/:id",
    element : <ProtectedRoutes><ViewBook /></ProtectedRoutes>
  },{
    path : "/logout",
    element : <ProtectedRoutes><Logout /></ProtectedRoutes>
  },
  {
    path : "/issuebook",
    element : <ProtectedRoutes><IssueBook /></ProtectedRoutes>
  },
  {
    path : "/users",
    element : <ProtectedRoutes><Users /></ProtectedRoutes>
  },
  {
    path : "/profile",
    element : <ProtectedRoutes><AdminProfile /></ProtectedRoutes>
  },
  {
    path : "/queries",
    element : <ProtectedRoutes><Queries /></ProtectedRoutes>
  },
  {
    path : "/reply/:id",
    element : <ProtectedRoutes><Reply /></ProtectedRoutes>
  },
   {
      path: "/dashboard",
      element: <ProtectedRoutes><AdminDashboard /></ProtectedRoutes>
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
