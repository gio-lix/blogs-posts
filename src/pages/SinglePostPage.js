import React from 'react';
import {useSelector} from "react-redux";
import {selectPostById} from "../redux/slices/posts/postsSlices";
import PostsAuthor from "../redux/slices/postsAuthor/postsAuthor";
import TimeAgo from "../components/TimeAgo";
import {useParams, Link} from "react-router-dom";
import ReactionButton from "../components/Reaction";

const SinglePostPage = () => {
    const {postId} = useParams()

    const post = useSelector((state) => selectPostById(state, Number(postId)))

    if (!post) {
        return (
            <section>
                <h2>Hello</h2>
                <h2>Post Not Found!</h2>
            </section>
        )
    }

    return (
        <article className='container mx-auto border p-4 pb-10 shadow-xl shadow-green-200 mt-10'>
            <div className='relative md:my-7 flex items-center flex-col md:flex-row place-items-center '>
                <Link to="/">
                    <a className='underline underline-offset-8 hover:text-yellow-400 break-normal	'>
                        Go Back
                    </a>
                </Link>
                <span className='md:absolute w-[70%]  left-[50%] md:translate-x-[-50%]'>
                    <h3 className=' text-xl text-green-200 text-center my-5'>{post.title}</h3>
                </span>
            </div>
            <p className='text-lg'>{post.body}</p>
            <p className="postCredit">
                <Link to={`/post/edit/${post.id}`}>
                    <a className='block underline underline-offset-4 hover:text-yellow-400 my-4'>Edit Post</a>
                </Link>
                <PostsAuthor  userId={post.userId}/>
                <ReactionButton post={post} />
                <TimeAgo timeStep={post.date} />
            </p>
        </article>
    );
};

export default SinglePostPage;