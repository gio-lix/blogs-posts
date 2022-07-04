import {createSlice, nanoid} from "@reduxjs/toolkit";
import {sub} from "date-fns"


const initialState = [
    {
        id: "1",
        title: " Lorem Ipsum has been the industry's standard dummy",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        date: sub(new Date(), {minutes: 10}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: "2",
        title: " Lorem Ipsum has been the industry",
        content: "Lorem Ipsum is simply dummy text of the printing.",
        date: sub(new Date(), {minutes: 7}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: "3",
        title: " Lorem Ipsum has been the industry",
        content: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
        date: sub(new Date(), {minutes: 3}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }
]

export const postsSlices = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postsAdded: {
            reducer(state, action) {
                state.unshift(action.payload)
            },
            prepare(title, content, userID) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userID,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },

        reactionAdded(state, action) {
            const {postId, reaction} = action.payload
            const existingPost = state.find(post => String(post.id) === String(postId))

            if (existingPost) {
                existingPost.reactions[reaction]++
            }

        }

    }
})

export const selectAllPosts = (state) => state.posts

export const {postsAdded, reactionAdded} = postsSlices.actions

export default postsSlices.reducer