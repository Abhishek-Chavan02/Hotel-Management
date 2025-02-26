<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, loginUser } from "../app/userApi";

const initialState = {
    data: [],
    loading: false,
    message: null,
    loggedInUser: null,
    userInfo:null,
    error:false
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoggedInUser: (state, action) => {
            state.loggedInUser = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error=false
            })
            .addCase(fetchUsers.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.data = payload;
                state.error=false
            })
            .addCase(fetchUsers.rejected, (state, { error }) => {
                state.loading = false;
                state.message = error.message;
                state.error=true
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.userInfo = null;
                state.message = "";
                state.error=false
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.userInfo = payload;
                state.message = payload.message;
                state.error=false
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.message = payload.message;
                state.userInfo = null;
                state.error=true
            });



            
    },


});

export const { setLoggedInUser } = userSlice.actions;
export default userSlice.reducer;
=======
import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, loginUser } from "../app/userApi";

const initialState = {
    data: [],
    loading: false,
    message: null,
    loggedInUser: null,
    userInfo:null,
    error:false
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoggedInUser: (state, action) => {
            state.loggedInUser = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error=false
            })
            .addCase(fetchUsers.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.data = payload;
                state.error=false
            })
            .addCase(fetchUsers.rejected, (state, { error }) => {
                state.loading = false;
                state.message = error.message;
                state.error=true
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.userInfo = null;
                state.message = "";
                state.error=false
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.userInfo = payload;
                state.message = payload.message;
                state.error=false
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.message = payload.message;
                state.userInfo = null;
                state.error=true
            });



            
    },


});

export const { setLoggedInUser } = userSlice.actions;
export default userSlice.reducer;
>>>>>>> localui
