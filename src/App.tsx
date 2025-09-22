import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Eğer dosyaların src/components klasöründe ise:
import GearList from "./components/GearList";
import CartPage from "./components/CartPage";

const App = () => {
  const [cart, setCart] = useState<string[]>([]);

  return (
    <Router>
      <Routes>
     
        <Route path="/" element={<GearList cart={cart} setCart={setCart} />} />


        <Route path="/cart" element={<CartPage cart={cart} />} />
      </Routes>
    </Router>
  );
};

export default App;


