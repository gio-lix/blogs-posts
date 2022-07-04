import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";
import {postsAdded} from "../redux/slices/posts/postsSlices";

const Form = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title && content) {
            dispatch(postsAdded({
                id: nanoid(),
                title,
                content
            }))
            setTitle("")
            setContent("")
        }

    }

    return (
        <div className=' w-full'>
            <h2 className='text-center mb-4 text-green-400'>Add new post</h2>
            <form onSubmit={handleSubmit}>

                <label htmlFor="postsTitle" className='block mb-2'>title</label>
                <input
                    type="text"
                    id="postsTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='text-black outline-none px-2 mb-8 w-full'
                />
                <label htmlFor="postsTitle" className='block mb-2'>content</label>
                <textarea
                    id="postsTitle"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className='text-black outline-none px-2  mb-8  w-full h-32 resize-none'
                />


                <button

                    type="submit"
                    className='block w-full mx-auto font-semibold
                    shadow-lg hover:shadow-green-600
                      border border-green-400 hover:bg-green-400 hover:text-black'
                >Save Post</button>

            </form>

        </div>
    );
};

export default Form;