import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import axios from "axios";
import LoadingPost from "./LoadingPost";
import Error from "./Error";

function PostList() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoadind] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoadind(true);
                const response = await axios.get('https://1bd702380e9d13e1.mokky.dev/post');
                setPosts(response.data);
            } catch(error) {
                setIsError(true);
                console.log(error);
            } finally {
                setIsLoadind(false);
            }
        }
    fetchPosts();
 }, []);

    if (isError) {
        return <Error />
    }

    return (
        <div class ="all-anekdot-block">
            {isLoading ? (<LoadingPost/>) : (
                <>
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post}/>
                    ))}
                </>
            )}
            
        </div>
    );
}

export default PostList;