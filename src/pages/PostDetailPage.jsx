import { Link, useParams } from "react-router-dom";
import backIcon from "../assets/images/back.svg"
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingDetail from "../components/LoadingDetail";
import Error from "../components/Error";

function PostDetailPage() {

    const {id} = useParams();
    const [post, setPost] = useState({});
    const [isLoading, setIsLoadind] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoadind(true);
                const response = await axios.get(`https://1bd702380e9d13e1.mokky.dev/post/${id}`);
                setPost(response.data);
            } catch(error) {
                setIsError(true);
                console.log(error);
            } finally {
                setIsLoadind(false);
            }
        }
        fetchPosts();
    }, [id]);

    if (isError) {
        return <Error />
    }


    return( 
    <section class="mobile-block">
        <Link to="/" class="back-button">
            <div class="container"> 
                <img src={backIcon} alt="Back icon" />
                Назад
            </div>
        </Link>
        {isLoading ? (<LoadingDetail/>) : ( 
                <div class="container">
                    <div class="post-detail-block">
                        <h3 class="anekdot-card_title-">{post.title}</h3>
                        <p class="description">
                            {post.description}
                        </p>
                        <div class="anekdot-card_date">{post.date}</div>
                        <span class="author"> Источник: <strong class="light-success-text"> {post.author} </strong>
                        </span>
                        <p> <button class="tag-button">{post.category}</button> </p> 
                    </div> 
                </div>
        )}
   </section>);
}

export default PostDetailPage;