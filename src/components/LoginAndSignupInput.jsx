import React from "react";

function LoginAndSignupInput({ value, onChange, placeholder, name, error, type = "text" }) {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{name}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
                name={name}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
}

export default LoginAndSignupInput;
