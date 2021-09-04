import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addPost } from '../features/posts/postsSlice';

export default function AddPostForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch(addPost({
            title,
            description
        }));
    }
    return (
        <form onSubmit={handleSubmit}>
            <Link to="/">Go to home page</Link>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <input type="submit"/>
        </form>
    )
}