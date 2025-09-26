
import { useNavigate } from "react-router-dom";
import type { Product } from "../types/Product";

type CartPageProps = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

const CartPage = ({ cart, setCart }: CartPageProps) => {
  const handleRemove = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
  <div className="cart-page">
  <h2 className="cart-title">🛒 Sepetim</h2>
      {cart.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-img" />
                <b>{item.name}</b> - {item.brand}
                <button onClick={() => handleRemove(index)} className="cart-remove">
                  Kaldır
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleCheckout} className="cart-checkout">
            Satın Al
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;




