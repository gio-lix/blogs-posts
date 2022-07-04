import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addNewPost} from "../redux/slices/posts/postsSlices";
import {selectAllUsers} from "../redux/slices/users/userSlice";

const PostForm = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [userID, setUserID] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title && content) {
            try {
                dispatch(addNewPost({title, content, userID})).unwrap()
                setTitle("")
                setContent("")
                setUserID("")
            } catch (err) {
                console.log("fail")
            }finally {
            }
        }
    }

    return (
        <div className='w-[80%] mx-auto  '>
            <h2 className='text-center mb-4 text-green-400'>Add new post</h2>
            <form onSubmit={handleSubmit}>

                <label htmlFor="postsTitle" className='block mb-1'>title</label>
                <input
                    type="text"
                    id="postsTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='text-black outline-none px-2 mb-4 w-full'
                />

                <label htmlFor="userId" className="block mb-1">user</label>
                <select
                    onChange={(e) => setUserID(e.target.value)}
                    className='text-black mb-5 outline-none w-full '
                >
                    {users.map(user => {
                        return (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        )
                    })}
                </select>

                <label htmlFor="postsTitle" className='block mb-1'>content</label>
                <textarea
                    id="postsTitle"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className='text-black outline-none px-2  mb-4  w-full h-32 resize-none'
                />

                <button
                    type="submit"
                    className='block w-full mx-auto font-semibold
                    shadow-lg hover:shadow-green-600 py-2
                      border border-green-400 hover:bg-green-400 hover:text-black'
                >Save Post
                </button>

            </form>

        </div>
    );
};

export default PostForm;