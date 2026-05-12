import "./ItemList.css";

import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
    console.log("Products en ItemList", products);

    if (!products.length) {
        return <p>No hay productos disponibles.</p>;
    }

    return (
        <div className="products-container">
            {products.map((product) => (
                
                <Item key={product.id} {...product} />
            ))}
        </div>
    );
};