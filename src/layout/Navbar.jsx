import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import search from "../assets/search.png";
import logout from "../assets/logout.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);

  // Refs for the dropdown and button to detect outside clicks
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Toggle for profile dropdown
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false); // Close dropdown
      }
    };

    // Add event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow p-4 sticky z-1">
      <nav className="flex justify-between items-center">
        {/* Logo and system name */}
        <div className="text-2xl font-bold flex gap-2 items-center">
          Admin Dashboard
        </div>

        {/* Search bar and icons */}
        <div className="flex items-center space-x-6">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring focus:border-black-300 dark:focus:border-gray-500 transition-all duration-300 pl-10 dark:bg-gray-800 dark:text-white"
            />
            <img
              src={search}
              alt="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            />
          </div>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center space-x-2"
              onClick={toggleDropdown}
              ref={buttonRef}
            >
              <FontAwesomeIcon icon={faUser} />
              <FontAwesomeIcon icon={faCaretDown} />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-4 w-48 bg-white dark:bg-gray-800 shadow-md rounded-md z-10">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center space-x-2">
                    <img src={logout} alt="Logout Icon" className="w-5 h-5" />
                    <span>Logout</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
 