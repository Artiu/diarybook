import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory, Redirect } from "react-router-dom"
import formatDate from "../helpers/formatDate";
import { removePost } from '../features/posts/postsSlice'

export default function Post() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const post = useSelector(state => state.posts.find(post => post.id === id));

    const [isRemoveConfirmationOpen, setIsRemoveConfirmationOpen] = useState(false);

    const handleRemove = () => {
        dispatch(removePost({ id }));
        history.push('/');
    }

    return (
        post ?
        <>
            <Link to="/" className="bg-green-400 hover:bg-green-500">Go to home page</Link>
            <div className="px-4 mt-4">
                <h1 className="text-3xl font-bold text-center">{post.title}</h1>
                <p className="text-lg">{post.description}</p>
                <p>{formatDate(post.date)}</p>
            </div>
            <div className="my-4 flex gap-4 justify-center">
                <Link to={`/posts/edit/${id}`} className="bg-gray-300 hover:bg-gray-400">Edit post</Link>
                <button className="bg-red-500 hover:bg-red-600" onClick={() => setIsRemoveConfirmationOpen(true)}>Remove post</button>
            </div>
            {isRemoveConfirmationOpen &&
            <div className="fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-90 backdrop-blur">
                <div className="w-full md:w-96 shadow-lg absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 p-6">
                    <p>Are you sure you want remove this post?</p>
                    <div className="mt-4 flex gap-2">
                        <button className="bg-red-500 hover:bg-red-600" onClick={handleRemove}>Remove post</button>
                        <button className="bg-gray-300 hover:bg-gray-400" onClick={() => setIsRemoveConfirmationOpen(false)}>Go back</button>
                    </div>
                </div>
            </div>
            }
        </>
        :
        <Redirect to="/"/>
    )
}