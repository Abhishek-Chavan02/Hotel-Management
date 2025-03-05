
import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const userState = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        number: "",
    });

    const dispatch = useDispatch();

    console.log(userState);


    const submit = (e) => {
        e.preventDefault();
        dispatch(saveUserInfo({ name: formData.name, email: formData.email, password: formData.password, number: formData.number }));
        navigate("/login");
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <div>
                <div className="container mx-auto flex justify-center items-center min-h-screen">
                    <div className="bg-white p-6 shadow-lg rounded-lg" style={{ width: "350px" }}>
                        <h3 className="text-center text-xl font-semibold">Sign Up</h3>

                        <form onSubmit={submit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                                <input
                                    type="number"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    name="number"
                                    value={formData.number}
                                    onChange={handleChange}
                                />
                            </div>

                            <button type="submit" className="w-full py-2 px-4 bg-[#5A2360] text-white rounded-md hover:bg-blue-600">
                                Sign Up
                            </button>
                        </form>

                        <p className="text-center mt-4 text-sm">
                            Already have an account? <a href="/login" className="text-blue-500 hover:text-blue-700">Login</a>
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
}

