import {useDispatch} from "react-redux";
import {reactionAdded} from "../redux/slices/posts/postsSlices";


const reactionEmoji = {
    thumbsUp: "๐",
    wow: "๐ฎ",
    heart: "๐งก",
    rocket: "๐",
    coffee: "โจ"
}

const ReactionButton = ({post}) => {
    const dispatch = useDispatch()

    return (
        <div className='mb-4'>
            {Object.entries(reactionEmoji).map(([name, emoji]) => {
                return (
                    <button
                        key={name}
                        type="button"
                        className="mt-5"
                        onClick={() => dispatch(reactionAdded({postId: post.id, reaction: name}))}
                    >
                        {emoji} <span className='text-sm mr-5  '> {post.reactions[name]}</span>
                    </button>
                )
            })}
        </div>
    )
}
export default ReactionButton