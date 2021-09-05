import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addPost } from '../features/posts/postsSlice';

export default function AddPostForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(title && description){
            dispatch(addPost({
                title,
                description
            }));
            history.push('/');
        }
        else{
            setError('All fields must be filled up');
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <Link to="/" className="self-start bg-green-400 hover:bg-green-500">Go to home page</Link>
            <h1 className="text-3xl font-bold">Create a new post</h1>
            <input type="text" className="font-semibold" value={title} placeholder="Title..." onChange={(e) => setTitle(e.target.value)}/>
            <textarea value={description} placeholder="Description..." onChange={(e) => setDescription(e.target.value)}/>
            {error && <p className="text-red-500 font-semibold">{error}</p>}
            <input type="submit" value="Add new post"/>
        </form>
    )
}