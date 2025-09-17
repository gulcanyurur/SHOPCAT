type CartPageProps = {
  cart: string[];
};

const CartPage = ({ cart }: CartPageProps) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Sepetim</h2>
      {cart.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
