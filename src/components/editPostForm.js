import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { editPost } from '../features/posts/postsSlice';

export default function EditPostForm() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(title && description){
            dispatch(editPost({
                id,
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
            <Link to={`/posts/${id}`} className="self-start bg-green-400 hover:bg-green-500">Go back</Link>
            <h1 className="text-3xl font-bold">Edit post</h1>
            <input type="text" className="font-semibold" value={title} placeholder="Title..." onChange={(e) => setTitle(e.target.value)}/>
            <textarea value={description} placeholder="Description..." onChange={(e) => setDescription(e.target.value)}/>
            {error && <p className="text-red-500 font-semibold">{error}</p>}
            <input type="submit" value="Edit post"/>
        </form>
    )
}