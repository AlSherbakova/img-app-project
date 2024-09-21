import PostList from "../components/PostList";

function HomePage() {
    return (
        <section class="mobile-block">
                <div class="mobile-block_header is-krasniy">
                Главная 
                </div>
        <PostList />
        </section>
    ); 
}

export default HomePage;