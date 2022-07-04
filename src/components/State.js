import React from 'react';
import {useSelector} from "react-redux";
import {selectAllPosts} from "../redux/slices/posts/postsSlices";
import PostsAuthor from "../redux/slices/postsAuthor/postsAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./Reaction";

const State = () => {
    const data = useSelector(selectAllPosts)

    const orderedPosts = data.slice().sort((a,b) => b.date.localeCompare(a.date))

    return (
        <section >
            {orderedPosts.map(post => (
                <article
                    className='w-6/3 min-h-100px] border border-indigo-500 p-3 shadow-xl
                        hover:shadow-indigo-500/40 hover:bg-gray-700 hover:text-indigo-300 hover:border-indigo-400  mb-5'
                    key={post.id}>

                    <span className='flex mb-3'> title: <h3 className='ml-3 text-sm  '>{post.title}</h3></span>
                    <h3>{post.content}</h3>
                    <span className="text-xs italic">
                        <PostsAuthor userId={post.userID} />
                    </span>
                    <TimeAgo timeStep={post.date} />
                    <ReactionButton post={post} />

                </article>
            ))}
        </section>
    );
};

export default State;