import {createSlice} from "@reduxjs/toolkit";


const initialState = [
    {id: 0, name: "Dude Ladvasnki"},
    {id: 1, name: "mollie randomsson"},
    {id: 2, name: "rebecca remdansson"},
    {id: 3, name: "harry pitersson"}
]


export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }

})

export const selectAllUsers = (state) => state.users

export default userSlice.reducer