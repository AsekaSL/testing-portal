import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="hidden md:block w-64 bg-white/80 backdrop-blur-md p-4 h-screen sticky top-0 shadow-lg border-r border-gray-200">
      <nav className="flex flex-col gap-2 mt-6">
        <Link to="/students" className="sidebar-item flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200 hover:shadow-sm text-gray-700 hover:text-indigo-700">
          <span className="sidebar-icon transition-transform duration-200">
            <i data-feather="book" className="w-5 h-5"></i>
          </span>
          <span className="font-medium">Student Management</span>
        </Link>
        <Link to="/professors" className="sidebar-item flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200 hover:shadow-sm text-gray-700 hover:text-indigo-700">
          <span className="sidebar-icon transition-transform duration-200">
            <i data-feather="users" className="w-5 h-5"></i>
          </span>
          <span className="font-medium">Professor Management</span>
        </Link>
        <Link to="/courses" className="sidebar-item flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200 hover:shadow-sm text-gray-700 hover:text-indigo-700">
          <span className="sidebar-icon transition-transform duration-200">
            <i data-feather="user" className="w-5 h-5"></i>
          </span>
          <span className="font-medium">Course unit Management</span>
        </Link>
        <Link to="/reports" className="sidebar-item flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200 hover:shadow-sm text-gray-700 hover:text-indigo-700">
          <span className="sidebar-icon transition-transform duration-200">
            <i data-feather="bar-chart-2" className="w-5 h-5"></i>
          </span>
          <span className="font-medium">Report Generation</span>
        </Link>
        <Link to="/adminuser" className="sidebar-item flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200 hover:shadow-sm text-gray-700 hover:text-indigo-700 mt-4">
          <span className="sidebar-icon transition-transform duration-200">
            <i data-feather="settings" className="w-5 h-5"></i>
          </span>
          <span className="font-medium">Admin User Management</span>
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
