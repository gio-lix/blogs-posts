import {configureStore} from "@reduxjs/toolkit";
import postsReducer from "./slices/posts/postsSlices"
import postsUsers from "./slices/users/userSlice"

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: postsUsers
    }
})