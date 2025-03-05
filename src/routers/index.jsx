import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Rooms from '../pages/Rooms';
import AboutUs from '../pages/AboutUs';
import Profile from '../pages/Profile';

import ProtectedRoutes from './ProtectedRoutes';
import AppLayout from '../applayout/AppLayout';
import Adminprofile from '../dashboard/Adminprofile';
import UserList from '../dashboard/UserList';
import HotelList from '../dashboard/HotelList';
import Dashboard from '../dashboard/Dashboard';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route element={<ProtectedRoutes />}>
                <Route element={<AppLayout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/rooms" element={<Rooms />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Route>

            {/* <Route element={<ProtectedRoutes />}>
                <Route element={<AppLayout />}>
                    <Route path="/admin" element={<Dashboard />} />
                    <Route path="/admin/hotel-list" element={<HotelList />} />
                    <Route path="/admin/user-list" element={<UserList />} />
                    <Route path="/admin/admin-profile" element={<Adminprofile />} />
                </Route>
            </Route> */}
        </Routes>
    );
}

export default Router;