import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
    const loggedInUser = useSelector((state) => state.user.userInfo);
    if (!loggedInUser) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-white p-5 shadow-lg rounded-lg max-w-md w-full text-center">
                    <h2 className="text-xl font-semibold mb-4">Please log in to view your profile</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 shadow-lg rounded-lg max-w-sm w-full">
                <h2 className="text-2xl font-semibold text-center mb-6">Profile Information</h2>

                <div className="space-y-4">
                    <div className="flex justify-between">
                        <span className="font-semibold text-gray-700">Email:</span>
                        <span className="text-gray-900">{loggedInUser.data.email}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-gray-700">Password:</span>
                        <span className="text-gray-900">{loggedInUser.data.password}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
