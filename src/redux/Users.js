import { createSlice } from "@reduxjs/toolkit";

import {UserData} from '../FakeData/FakeData';

export const userSlice = createSlice({
    name: 'users',
    initialState: {value : UserData},
    reducers: {
        // new userName pushing
        addUser: (state, action) => {
            state.value.push(action.payload);
        },

        // user deleting
        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        },

        // user name updating
        updateUserName: (state, action) => {
            state.value.map((user) => {
                if(user.id === action.payload.id) {
                    user.userName = action.payload.userName;
                }
            })
        },
    },
});

export const {addUser, deleteUser, updateUserName} = userSlice.actions;

export default userSlice.reducer;