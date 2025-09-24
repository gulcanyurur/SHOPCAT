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

  const handleCheckout = () => {
    alert("Satın alma başarılı!");
    setCart([]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Sepetim</h2>
      {cart.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <img src={item.image} alt={item.name} width="60" style={{ marginRight: "10px" }} />
                <b>{item.name}</b> - {item.brand}
                <button onClick={() => handleRemove(index)} style={{ marginLeft: "10px" }}>
                  Kaldır
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleCheckout} style={{ marginTop: "20px" }}>
            Satın Al
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;




