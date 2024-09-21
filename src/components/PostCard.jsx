import { Link } from "react-router-dom";

function PostCard({post}) {
    return (
            <Link to={`/post/${post.id}`} class="anekdot-card">
                <div class="container">
                    <h3 class="anekdot-card_title">{post.title}</h3>
                    <span class="anekdot-card_date"> {post.date} </span>
                    <h3 class="anekdot-card_category"> {post.category} </h3>
                </div>
        </Link>
    );
}

export default PostCard;