import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail"; 

export const ItemDetailContainer = ({ addToCart }) => {
    const { id } = useParams();
    const [itemDetail, setItemDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data/products.json")
            .then(res => res.json())
            .then((data) => {
                const item = data.find(element => String(element.id) === id);
                if (item) {
                    setItemDetail(item);
                } else {
                    throw new Error("Elemento no encontrado");
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Cargando...</p>;
    if (!itemDetail) return <p>Producto no encontrado</p>;

    return (
        <section>               
            <ItemDetail item={itemDetail} addToCart={addToCart} /> 
        </section>
    );
};