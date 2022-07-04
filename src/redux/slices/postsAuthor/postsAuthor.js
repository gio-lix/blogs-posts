import {useSelector} from "react-redux";
import {selectAllUsers} from "../users/userSlice";


const PostsAuthor = ({userId}) => {

    const users = useSelector(selectAllUsers)

    const author = users.find(user => String(user.id) === String(userId))

    return <span >By {author ? author.name : "unknown author"}</span>
}

export default PostsAuthor
