
import { useNavigate } from "react-router-dom";
import type { Product } from "../types/Product";

type CartPageProps = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

const CartPage = ({ cart, setCart }: CartPageProps) => {
  // Aggregate cart items by id and count quantity
  type CartItem = Product & { quantity: number };
  const cartWithQty: CartItem[] = cart.reduce((acc: CartItem[], item) => {
    const found = acc.find((p) => p.id === item.id);
    if (found) {
      found.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  // Remove all of a product from cart
  const handleRemove = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Decrease quantity by 1
  const handleDecrease = (id: number) => {
    const idx = cart.findIndex((item) => item.id === id);
    if (idx !== -1) {
      const newCart = [...cart];
      newCart.splice(idx, 1);
      setCart(newCart);
    }
  };

  // Increase quantity by 1 (add one more of the product)
  const handleIncrease = (product: Product) => {
    setCart([...cart, product]);
  };

  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-page">
      <h2 className="cart-title">🛒 Sepetim</h2>
      {cartWithQty.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartWithQty.map((item) => (
              <li key={item.id} className="cart-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img src={item.image} alt={item.name} className="cart-img" />
                  <div>
                    <b>{item.name}</b> - {item.brand}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="cart-qty-controls">
                    <button onClick={() => handleDecrease(item.id)} className="cart-qty-btn">-</button>
                    <span className="cart-qty">{item.quantity}x</span>
                    <button onClick={() => handleIncrease(item)} className="cart-qty-btn">+</button>
                  </div>
                  <button onClick={() => handleRemove(item.id)} className="cart-remove">
                    Kaldır
                  </button>
                </div>
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




