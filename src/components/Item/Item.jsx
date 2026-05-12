import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({ id, name, price, image, children }) => {
    return (
        <article className="product-card">
            <img src={image} alt={`foto de ${name}`} />
            <h3>{name}</h3>
            <p className="price">${price}</p>
            
            {!children && (
                <Link to={`/item/${id}`} className="btn-detail">
                    Ver Detalle
                </Link>
            )}

            {children}
        </article>
    );
};