import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import profile from "../assets/profile.png"; // Replace with your profile picture path

const Adminprofile = () => {
  // You can replace this with real data from a backend or state
  const admin = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Administrator",
  };

  return (
    <div className="flex justify-center items-start pt-10 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl w-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center">
        <div className="flex flex-col items-center space-y-6 mb-8">
          {/* Profile Picture */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600">
            <img
              src={profile}
              alt="Admin Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Admin Info */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black dark:text-white">
              {admin.name}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {admin.role}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {admin.email}
            </p>
          </div>
        </div>

        {/* Edit Profile Button */}
        <button className="inline-flex items-center px-6 py-3 bg-fuchsia-950 text-white rounded-md hover:bg-fuchsia-900 focus:outline-none focus:ring-2 transition duration-200">
          <FontAwesomeIcon icon={faUserEdit} className="mr-2" />
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Adminprofile;
