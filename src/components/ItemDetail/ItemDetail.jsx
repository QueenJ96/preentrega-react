import { Item } from "../Item/Item";

export const ItemDetail = ({ item, addToCart }) => {
    return (
        <div className="detail-wrapper" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <Item {...item}>
                <p style={{ margin: '15px 0', fontSize: '0.9rem', color: '#555' }}>
                    {item.description}
                </p>
                <button className="btn-detail" onClick={() => addToCart(item)}>
                    Agregar al carrito
                </button>
            </Item>
        </div>
    );
};