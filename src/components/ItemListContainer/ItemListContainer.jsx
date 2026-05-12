import { useEffect, useState } from "react"
import { data } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.log(err)) 
            .finally(() => setLoading(false));
    }, []);

    if(loading) return <p>Cargando...</p>;
    if(error) return <p>Hubo un error al cargar los productos.</p>;

    return (
    <section>   
        <ItemList products={products} />
    </section>)
}
