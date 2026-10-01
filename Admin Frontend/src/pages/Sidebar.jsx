
function Sidebar() {
  return (
    <div className="min-h-screen w-64 bg-gray-900 text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-center">
          Library Admin
        </h1>
      </div>

      {/* Menu */}
      <ul className="flex-1 p-4 space-y-2">
        <li className="px-4 py-3 rounded-lg hover:bg-blue-600 cursor-pointer transition-all duration-300">
          Dashboard
        </li>

        <li className="px-4 py-3 rounded-lg hover:bg-blue-600 cursor-pointer transition-all duration-300">
          Books
        </li>
        
        <li className="px-4 py-3 rounded-lg hover:bg-blue-600 cursor-pointer transition-all duration-300">
          Users
        </li>

        <li className="px-4 py-3 rounded-lg hover:bg-blue-600 cursor-pointer transition-all duration-300">
          Issue Book
        </li>

        <li className="px-4 py-3 rounded-lg hover:bg-blue-600 cursor-pointer transition-all duration-300">
          Profile
        </li>
      </ul>

      
      <div className="p-4 border-t border-gray-700">
        <button className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-700 transition-all duration-300">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;