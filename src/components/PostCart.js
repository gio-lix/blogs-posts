import React from 'react';
import {Link} from "react-router-dom";
import PostsAuthor from "../redux/slices/postsAuthor/postsAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./Reaction";

let PostCart = ({post}) => {
    return (
        <article
            className='w-[95%] mx-auto min-h-100px] border border-indigo-500 p-3 shadow-xl  hover:shadow-indigo-500/40 hover:bg-gray-700 hover:text-indigo-300 hover:border-indigo-400  mb-5'
            key={post.id}>

                            <span className='flex items-center mb-3'> title: <h3
                                className='ml-3 text-sm  '>{post.title}</h3></span>
            <h3>{post.content}</h3>

            <p>{String(post.body).substring(0, 30)}...</p>

            <Link to={`/post/${post.id}`}>
                <a className='underline text-sm mr-5 hover:text-green-200'>
                    View Post
                </a>
            </Link>
            <span className="text-xs italic">
                                <PostsAuthor userId={post.userId}/>
                            </span>
            <TimeAgo timeStep={post.date}/>
            <ReactionButton post={post}/>
        </article>
    );
};
PostCart = React.memo(PostCart)
export default PostCart;