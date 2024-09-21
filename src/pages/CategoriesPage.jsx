import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingRow from "../components/LoadingRow";
import axios from "axios";
import Error from "../components/Error";

function CategoriesPage() {

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchCategories() {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://1bd702380e9d13e1.mokky.dev/category`);
                setCategories(response.data);
            } catch(e) {
                setIsError(true);
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }
        fetchCategories();
    }, []);

    if (isError) {
        return <Error />
    }

    return(
        <section class="mobile-block">
            <div class="mobile-block_header is-korich">
                Главная 
            </div>
        {isLoading ? (<LoadingRow/>) : (
            <div class="container">
                <div class="category-row">
                    {categories.map((category) => (
                        <Link to={`/category/posts/${category.id}`} class="category-item">
                            <img src={category.imageUrl} alt={category.name} class="category-item_img"/>
                            <span class="category-item_title">{category.name}</span>
                        </Link>
                    ))}

                </div>
            </div>
        )}

    </section>);
}

export default CategoriesPage;