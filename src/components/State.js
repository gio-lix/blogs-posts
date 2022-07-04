import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, selectAllPosts, selectPostsError, selectPostsStatus} from "../redux/slices/posts/postsSlices";
import PostCart from "./PostCart";


const PostsList = () => {
    const dispatch = useDispatch()

    const posts = useSelector(selectAllPosts)
    const status = useSelector(selectPostsStatus)


    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchPosts())
        }
    }, [status, dispatch])

    if (status === "loaded") {
        return <div>Loading..</div>
    }


    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))


    return (
        <>
            <section className='grid gap-4 mx-auto sm:grid-cols-1 md:grid-cols-2 container mt-10'>
                {orderedPosts.map(post =>  <PostCart post={post} key={post.id} />)}
            </section>
        </>
    );
};
export default PostsList;