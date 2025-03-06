import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, loginUser, registerUser } from "../app/userApi";

const initialState = {
    // data: [],
    loading: false,
    message: null,
    // loggedInUser: null,
    // registeredUser: null,
    userInfo: null,
    error: false
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // setLoggedInUser: (state, action) => {
        //     state.loggedInUser = action.payload;
        // },

        // setRegisteredUser: (state, action) => {
        //     state.registeredUser = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder
            // .addCase(fetchUsers.pending, (state) => {
            //     state.loading = true;
            //     state.error = false
            // })
            // .addCase(fetchUsers.fulfilled, (state, { payload }) => {
            //     state.loading = false;
            //     state.data = payload;
            //     state.error = false
            // })
            // .addCase(fetchUsers.rejected, (state, { error }) => {
            //     state.loading = false;
            //     state.message = error.message;
            //     state.error = true
            // })

            // Add loginUser reducer
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.userInfo = null;
                state.message = "";
                state.error = false
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                console.log('payload: ', payload);
                state.loading = false;
                state.userInfo = payload;
                state.message = payload.message;
                state.error = false
            })

            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.userInfo = null;
                state.error = action.payload;
            })


            // Add RegisterUsers reducer

            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.userInfo = null;
                state.message = "";
                state.error = false
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.userInfo = payload;
                state.message = payload;
                state.error = false
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.userInfo = null;
                state.error = action.payload;
            });


    },


});

export const { setLoggedInUser, setRegisteredUser } = userSlice.actions;
export default userSlice.reducer;
