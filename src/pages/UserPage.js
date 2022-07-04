import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUserById} from "../redux/slices/users/userSlice";
import {selectAllPosts} from "../redux/slices/posts/postsSlices";
import {Link} from "react-router-dom"

const UserPage = () => {
    const {userId} = useParams()

    const user = useSelector(state => selectUserById(state, Number(userId)))

    const postsForUser = useSelector(state => {
        const allPosts = selectAllPosts(state)
        return allPosts.filter(post => post.userId === Number(userId))
    })

    return (
        <section className='max-w-[(1200px] w-[calc(100%-10%)] mx-auto mt-10'>
            <h2 className='text-2xl font-semibold text-amber-500 mb-7'>{user?.name}</h2>
            <ol>
                {postsForUser?.map(post => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>
                            <a className='hover:text-white '>{post?.title}</a>
                        </Link>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default UserPage;