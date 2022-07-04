import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectAllUsers} from "../redux/slices/users/userSlice";
import {deletePost, selectPostById, updatePost} from "../redux/slices/posts/postsSlices";
import {useParams, useNavigate } from "react-router-dom";

const UpdatePostForm = () => {
    const dispatch = useDispatch()
    const {postId} = useParams()
    let navigate = useNavigate();

    const post = useSelector((state) => selectPostById(state, Number(postId)))
    const users = useSelector(selectAllUsers)



    const [title, setTitle] = useState(post?.title)
    const [content, setContent] = useState(post?.body)
    const [userId, setUserId] = useState(post?.userId)
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title && content) {
            try {
                dispatch(updatePost({ id: post.id, title, body: content, userId, reactions: post.reactions })).unwrap()

                setTitle("")
                setContent("")
                setUserId("")
                navigate(`/post/${postId}`)
            } catch (err) {
                console.log("fail")
            } finally {
                setAddRequestStatus("idle")
            }
        }
    }

    const onDeletePostClick = () => {
        try {
            setAddRequestStatus("pending")
            dispatch(deletePost({id: post.id})).unwrap()
            navigate(`/`)
        } catch (err) {
            console.log("error")
        } finally {
            setAddRequestStatus("idle")
        }
    }

    return (
        <div className=' w-[80%] mx-auto '>
            <h2 className='text-center mb-4 text-green-400'>Add new post</h2>
            <form onSubmit={handleSubmit}>

                <label htmlFor="postsTitle" className='block mb-1 text-amber-400'>title</label>
                <input
                    type="text"
                    id="postsTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='text-black outline-none px-2 mb-4 w-full'
                />

                <label htmlFor="userId" className="block mb-1 text-amber-400 ">user</label>
                <select
                    defaultValue={userId}
                    onChange={(e) => setUserId(e.target.value)}
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

                <label htmlFor="postsTitle" className='block mb-1 text-amber-400'>content</label>
                <textarea
                    id="postsTitle"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className='text-black outline-none px-2  mb-4  w-full h-32 resize-none'
                />

                <button
                    type="submit"
                    className='block w-full py-1 mx-auto font-bold  shadow-lg hover:shadow-green-600 text-center tracking-wide border border-green-400 hover:bg-green-400 hover:text-black'
                >
                    Save Post
                </button>
                <button
                    onClick={() => onDeletePostClick()}
                    className='block w-full mx-auto font-bold  mt-10 shadow-lg tracking-wide
                    hover:shadow-red-400  border border-amber-700 py-1 hover:bg-amber-700 hover:text-black'
                    type="button"
                >
                    Delete Post
                </button>

            </form>

        </div>
    );
};

export default UpdatePostForm;