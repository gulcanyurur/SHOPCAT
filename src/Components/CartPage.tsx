
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Product } from "../types/Product";

type CartPageProps = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

const CartPage = ({ cart, setCart }: CartPageProps) => {
 
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

  const handleRemove = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

 
  const handleDecrease = (id: number) => {
    const idx = cart.findIndex((item) => item.id === id);
    if (idx !== -1) {
      const newCart = [...cart];
      newCart.splice(idx, 1);
      setCart(newCart);
    }
  };

  const handleIncrease = (product: Product) => {
    setCart([...cart, product]);
  };


  const total = cartWithQty.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);

  const [purchased, setPurchased] = React.useState(false);

  const handleBuy = () => {
    setPurchased(true);
    setCart([]);
  };

  return (
    <div className="cart-page">
      <h2 className="cart-title">🛒 Sepetim</h2>
      {purchased ? (
        <div style={{ fontWeight: 600, color: '#388e3c', fontSize: 20, margin: '32px 0' }}>
          Satın alma işleminiz başarıyla tamamlandı! Teşekkürler 🐾
        </div>
      ) : cartWithQty.length === 0 ? (
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
                    <div style={{ color: '#388e3c', fontWeight: 600, fontSize: 15 }}>
                      {item.price ? `${item.price} TL` : ''}
                    </div>
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
          <div style={{ textAlign: 'right', fontWeight: 700, fontSize: 18, margin: '16px 0', color: '#d81b60' }}>
            Toplam: {total} TL
          </div>
          <button onClick={handleBuy} className="cart-checkout">
            Satın Al
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;




