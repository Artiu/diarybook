import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import formatDate from "../helpers/formatDate";

export default function Posts() {
    const posts = useSelector(state => state.posts);
    return (
        <div className="container mx-auto">
            <Link to="/posts/add">Add post</Link>
            {posts.map(({ title, description, id, date }) => {
                return (
                    <div key={id}>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <p>{formatDate(date)}</p>
                    </div>
                )
            })}
        </div>
    )
}