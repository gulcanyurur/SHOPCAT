import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GearList from "./Components/GearList";
import CartPage from "./Components/CartPage";
import type { Product } from "./types/Product";

const App = () => {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<GearList cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
};

export default App;




