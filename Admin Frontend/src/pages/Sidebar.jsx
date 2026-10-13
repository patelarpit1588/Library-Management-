import { useNavigate, NavLink } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-64 bg-gray-900 text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-center">
          Library Admin
        </h1>
      </div>

      {/* Menu */}
      <ul className="flex-1 p-4 space-y-4 text-lg">
  <li>
    <NavLink
      to="/dashboard"
      className={({ isActive }) =>
        `block px-4 py-3 rounded-lg transition-all duration-300 ${
          isActive
            ? "bg-blue-600 text-white font-semibold"
            : "hover:bg-blue-600"
        }`
      }
    >
      Dashboard
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/books"
      className={({ isActive }) =>
        `block px-4 py-3 rounded-lg transition-all duration-300 ${
          isActive
            ? "bg-blue-600 text-white font-semibold"
            : "hover:bg-blue-600"
        }`
      }
    >
      Books
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/users"
      className={({ isActive }) =>
        `block px-4 py-3 rounded-lg transition-all duration-300 ${
          isActive
            ? "bg-blue-600 text-white font-semibold"
            : "hover:bg-blue-600"
        }`
      }
    >
      Users
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/issuebook"
      className={({ isActive }) =>
        `block px-4 py-3 rounded-lg transition-all duration-300 ${
          isActive
            ? "bg-blue-600 text-white font-semibold"
            : "hover:bg-blue-600"
        }`
      }
    >
      Issue Book
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/profile"
      className={({ isActive }) =>
        `block px-4 py-3 rounded-lg transition-all duration-300 ${
          isActive
            ? "bg-blue-600 text-white font-semibold"
            : "hover:bg-blue-600"
        }`
      }
    >
      Profile
    </NavLink>
  </li>
</ul>


      <div className="p-4 border-t border-gray-700">
        <button className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-700 transition-all duration-300" onClick={() => navigate("/logout")}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;