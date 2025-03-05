import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import ProtectedRoutes from './ProtectedRoutes'
import Dashboard from '../dashboard/Dashboard'
import HotelList from '../dashboard/HotelList'
import UserList from '../dashboard/UserList'
import AdminLayout from '../layout/AdminLayout'
import AppLayout from '../applayout/AppLayout'
import Adminprofile from '../dashboard/Adminprofile'
import Contact from '../pages/Contact'
import AboutUs from '../pages/AboutUs'
import Rooms from '../pages/Rooms'
import Profile from '../pages/Profile'
import News from '../pages/News'


function Router() {
    return (
        <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />


            <Route path="/" element={<AppLayout />}>

                <Route path="home" element={
                    <ProtectedRoutes>
                        <Home />
                    </ProtectedRoutes>
                } />
                <Route path="contact" element={
                    <ProtectedRoutes>
                        <Contact />
                    </ProtectedRoutes>
                } />
                <Route path="rooms" element={
                    <ProtectedRoutes>
                        <Rooms />
                    </ProtectedRoutes>
                } />
                <Route path="about-us" element={
                    <ProtectedRoutes>
                        <AboutUs />
                    </ProtectedRoutes>
                } />
                <Route path="profile" element={
                    <ProtectedRoutes>
                        <Profile />
                    </ProtectedRoutes>
                } />
                <Route path="news" element={
                    <ProtectedRoutes>
                        <News />
                    </ProtectedRoutes>
                } />

            </Route>


            <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={
                    <Dashboard />
                } />
                <Route path="hotel-list" element={
                    <HotelList />
                } />
                <Route path="user-list" element={
                    <UserList />
                } />
                <Route path="admin-profile" element={
                    <Adminprofile />
                } />
            </Route>
        </Routes>
    )
}

export default Router
