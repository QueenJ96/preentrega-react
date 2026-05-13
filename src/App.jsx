import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

// --- 1. COMPONENTE MODAL ---
const ModalReserva = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center',
      alignItems: 'center', zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white', padding: '30px', borderRadius: '15px',
        textAlign: 'center', maxWidth: '400px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
      }}>
        <h2 style={{ color: '#7eb67e' }}>¡Solicitud Enviada! 📩</h2>
        <p>Gracias por confiar en <strong>Nacer con Estilo</strong>.</p>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>
          En breve me pondré en contacto con vos para coordinar los detalles de tu turno.
        </p>
        <button 
          onClick={onClose}
          style={{
            backgroundColor: '#f0a1b5', color: 'white', border: 'none',
            padding: '10px 25px', borderRadius: '20px', cursor: 'pointer', marginTop: '15px'
          }}
        >
          Entendido
        </button>
      </div>
    </div>
  );
};

// --- 2. COMPONENTE CARTVIEW ---
const CartView = ({ items, onRemove, onClear }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ padding: '40px', textAlign: 'center', minHeight: '60vh' }}>
      <h2 style={{ color: '#7eb67e' }}>Tu Carrito de Nacer con Estilo ✨</h2>
      <hr style={{ border: '1px solid #f8d7da', width: '50%', margin: '20px auto' }} />
      
      {items.length === 0 ? (
        <div>
          <p>El carrito está vacío.</p>
          <Link to="/" style={{ color: '#f0a1b5', fontWeight: 'bold' }}>Volver a ver talleres</Link>
        </div>
      ) : (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {items.map((prod) => (
              <li key={prod.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', borderBottom: '1px solid #eee' }}>
                <div style={{ textAlign: 'left' }}>
                  <strong style={{ color: '#555' }}>{prod.name}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#888' }}>${prod.price}</p>
                </div>
                <button onClick={() => onRemove(prod.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>🗑️</button>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '30px' }}>
            <h3 style={{ color: '#444' }}>Total: ${items.reduce((acc, el) => acc + el.price, 0)}</h3>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '20px' }}>
              <button onClick={onClear} style={{ backgroundColor: 'white', color: '#ff6b6b', border: '1px solid #ff6b6b', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer' }}>
                Vaciar Carrito
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                style={{ backgroundColor: '#7eb67e', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer' }}
              >
                Finalizar Reserva
              </button>
            </div>
          </div>
        </div>
      )}
      <ModalReserva isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

// --- 3. COMPONENTE PRINCIPAL APP (ESTO ES LO QUE FALTABA) ---
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      alert("Este servicio ya está en tu carrito ✨");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    if (window.confirm("¿Querés vaciar el carrito?")) {
      setCart([]);
    }
  };

  return (
    <> 
      <Header cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer addToCart={addToCart} />} />
        <Route 
          path="/carrito" 
          element={<CartView items={cart} onRemove={removeFromCart} onClear={clearCart} />} 
        />
      </Routes>
    </>
  );
}

export default App;