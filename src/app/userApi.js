import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedInUser, setRegisteredUser } from "../redux/userSlice";


export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
    // const response = await getUsers();
    // return response.data;
});



export const loginUser = createAsyncThunk(
    "user/login",
    async (data, { rejectWithValue, dispatch }) => {
        try {
            const response = await axiosInstance.post("/user/login", data);

            if (response.status === 200) {
                localStorage.setItem("user", JSON.stringify(response.data));
                dispatch(setLoggedInUser(response.data));

                return response.data;
            }
        } catch (error) {

            return rejectWithValue(
                error.response?.data?.error || "Login failed, please try again."
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
                localStorage.setItem("user", JSON.stringify(response.data));
                dispatch(setRegisteredUser(response.data));
                return response.data;
            }
        } catch (error) {

            return rejectWithValue(
                error.response?.data?.error || "Registration failed, please try again."
            );
        }
    }
)



