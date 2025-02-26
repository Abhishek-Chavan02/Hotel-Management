import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance";


export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
    // const response = await getUsers();
    // return response.data;
});



export const loginUser = createAsyncThunk("user/login", async (data) => {
    const response =await axiosInstance.post("login",data)
    try{
        
    return response.data;
    }
    catch(e){
        throw Error(e)
    }
});


export const RegisterUsers = createAsyncThunk("user/register", async () => {
    const response = await RegisterUsers();
    return response.data;
});