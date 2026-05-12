import { Route, Routes } from "react-router-dom"; 
import "./App.css";
import Header from './components/Header/Header';
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <> {/* Usamos un fragmento vacío para envolver todo */}
      <Header />
      <main> 
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<p>Carrito</p>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;