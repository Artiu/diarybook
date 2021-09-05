import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import formatDate from "../helpers/formatDate";

export default function Posts() {
    const posts = useSelector(state => state.posts);
    return (
        <>
            <h1 className="text-4xl font-bold text-center">Your posts</h1>
            <Link to="/add" className="bg-green-400 hover:bg-green-500">Add post</Link>
            {posts.map(({ title, description, id, date }) => {
                return (
                    <div key={id} className="mt-4 border-b-2 flex justify-between">
                        <div>
                            <h1 className="text-3xl font-bold">{title}</h1>
                            <p className="text-lg">{description}</p>
                            <p>{formatDate(date)}</p>
                        </div>
                        <div>
                            <Link to={`/posts/${id}`} className="bg-gray-300 hover:bg-gray-400">More options</Link>
                        </div>
                    </div>
                )
            })}
        </>
    )
}