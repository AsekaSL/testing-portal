import { Link } from "react-router-dom";

function StudentSidebar() {
  return (
    <aside className="hidden md:block w-64 bg-white/80 backdrop-blur-md p-4 h-screen sticky top-0 shadow-lg border-r border-gray-200">
      <nav className="flex flex-col gap-2 mt-6">
        <Link to="/student" className="sidebar-item flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200 hover:shadow-sm text-gray-700 hover:text-purple-700">
          <span className="sidebar-icon transition-transform duration-200">
            <i data-feather="home" className="w-5 h-5"></i>
          </span>
          <span className="font-medium">Dashboard</span>
        </Link>
        <Link to="/view-attendance" className="sidebar-item flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200 hover:shadow-sm text-gray-700 hover:text-purple-700">
          <span className="sidebar-icon transition-transform duration-200">
            <i data-feather="calendar" className="w-5 h-5"></i>
          </span>
          <span className="font-medium">View Attendance</span>
        </Link>
        <Link to="/student-notifications" className="sidebar-item flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200 hover:shadow-sm text-gray-700 hover:text-purple-700">
          <span className="sidebar-icon transition-transform duration-200">
            <i data-feather="bell" className="w-5 h-5"></i>
          </span>
          <span className="font-medium">Notifications</span>
        </Link>
        <Link to="/student-profile" className="sidebar-item flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200 hover:shadow-sm text-gray-700 hover:text-purple-700 mt-4">
          <span className="sidebar-icon transition-transform duration-200">
            <i data-feather="user" className="w-5 h-5"></i>
          </span>
          <span className="font-medium">Profile</span>
        </Link>
      </nav>
    </aside>
  );
}

export default StudentSidebar;