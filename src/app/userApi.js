import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance, { post } from "./axiosInstance";
// import { useSelector, useDispatch } from "react-redux";
// import { setLoggedInUser, setRegisteredUser } from "../redux/userSlice";
import * as jwt_decode from 'jwt-decode';

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
    // const response = await getUsers();
    // return response.data;
});



export const loginUser = createAsyncThunk(
    "user/login",
    async (data, { rejectWithValue }) => {
        try {
            const response = await post("/user/login", data);
            console.log('response: ', response);

            if (response) {
                console.log("inside");
                // localStorage.setItem("user", JSON.stringify(response.data));
                const token = response.data.password;
                console.log('token: ', token);

                // const decodedToken = jwt_decode(token);
                // 
                localStorage.setItem("user", JSON.stringify(token));
                axiosInstance.defaults.headers.common['Authorization'] = "Bearer " + token;
                return response;
            }
        } catch (error) {
            console.log('error 344: ', error);

            return rejectWithValue(
                error.data?.error || "Login failed, please try again."
            );
        }
    }
);



export const registerUser = createAsyncThunk(
    "user/register",
    async (data, { rejectWithValue, dispatch }) => {

        try {
            const response = await axiosInstance.post("/user/register", data)


            if (response.status === 200) {
                // localStorage.setItem("user", JSON.stringify(response.data));
                // dispatch(setRegisteredUser(response.data));
                return response.data;
            }
        } catch (error) {

            return rejectWithValue(
                error.response?.data?.error || "Registration failed, please try again."
            );
        }
    }
)



