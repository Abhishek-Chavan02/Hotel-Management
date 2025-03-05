import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faUsers,
  faArrowLeft,
  faArrowRight,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

const SidebarItem = ({ href, label, isCollapsed, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <li className="group">
      <Link
        to={href}
        className={`flex items-center py-3 px-4 hover:bg-white transition-all duration-300 ${
          isActive ? "bg-white border-l-4 border-black-500" : ""
        }`}
      >
        <FontAwesomeIcon icon={icon} className="w-5 h-5" />
        <span
          className={`text-black text-base font-medium leading-tight ml-4 text-nowrap ${
            isCollapsed ? "hidden" : "block"
          }`}
        >
          {label}
        </span>
      </Link>
    </li>
  );
};

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const sidebarItems = [
    { href: "/admin", label: "Dashboard", icon: faChartPie },
    { href: "/admin/hotel-list", label: "Hotel List", icon: faBuilding },
    { href: "/admin/user-list", label: "User List", icon: faUsers },
    { href: "/admin/admin-profile", label: "Profile", icon: faUsers },
  ];

  return (
    <aside
      className={`${
        isCollapsed ? "w-14" : "w-64"
      } h-full bg-black/5 transition-all duration-300 ease-in-out relative`}
    >
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute -right-2.5 top-0 w-6 h-6 flex justify-center items-center hover:bg-gray-300 rounded-full transition cursor-pointer focus:outline-none bg-gray-200"
      >
        {isCollapsed ? (
          <FontAwesomeIcon icon={faArrowRight} />
        ) : (
          <FontAwesomeIcon icon={faArrowLeft} />
        )}
      </button>

      {/* Sidebar Navigation */}
      <nav className="mt-8">
        <ul>
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              isCollapsed={isCollapsed}
              icon={item.icon}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
