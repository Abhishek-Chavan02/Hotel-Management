import React from 'react';

const UserList = () => {
    // Dummy data from API response
    const dummyUser = {
        id: '1',
        username: 'John Doe',
        email: 'john@wick.com',
        role: 'user'
    };

    return (
        <div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            {['User Id', 'Username', 'Email', 'Role'].map((header) => (
                                <th key={header} className="px-6 py-3">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">{dummyUser.id}</td>
                            <td className="px-6 py-4">{dummyUser.username}</td>
                            <td className="px-6 py-4">{dummyUser.email}</td>
                            <td className="px-6 py-4">{dummyUser.role}</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;
