
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Layout from "./components/Layout";
import PostsList from "./components/State";
import SinglePostPage from "./components/SinglePostPage";
import UpdatePostForm from "./components/UpdatePostForm ";
import PostForm from "./components/PostForm";
import UsersList from "./components/UsersList";
import UserPage from "./pages/UserPage";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<PostsList />} />

                <Route path="post">
                    <Route index element={<PostForm />} />
                    <Route path=':postId' element={<SinglePostPage />} />
                    <Route path="edit/:postId" element={<UpdatePostForm />} />
                </Route>

                <Route path="user">
                    <Route index element={<UsersList />} />
                    <Route path=":userId" element={<UserPage />} />
                </Route>

                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    );
}

export default App;
