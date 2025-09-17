import { Link } from "react-router-dom";

type GearProps = {
  name: string;
  brand: string;
  description: string;
  image: string;
  onAddToCart: () => void;
};

const Gear = ({ name, brand, description, image, onAddToCart }: GearProps) => {
  return (
    <article
      className="large"
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <img src={image} alt={name} width="200" />
      <h2>{name}</h2>
      <h3>{brand}</h3>
      <p>{description}</p>
      <button
        onClick={onAddToCart}
        style={{
          marginTop: "10px",
          padding: "8px 12px",
          backgroundColor: "#e91e63",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        🛒 Sepete Ekle
      </button>
    </article>
  );
};

type GearListProps = {
  cart: string[];
  setCart: React.Dispatch<React.SetStateAction<string[]>>;
};

const GearList = ({ cart, setCart }: GearListProps) => {
  const addToCart = (item: string) => {
    setCart([...cart, item]);
  };

  return (
    <div className="GearList">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          gap: "250px",
        }}
      >
        <img src="/logo.png" alt="ShopCat Logo" style={{ width: "170px" }} />

        <h1 style={{ flex: 1, textAlign: "center", fontSize: "20px" }}>
          2500 TL ve Üzeri Alışverişlerde İstanbul İçi Kargo Bedava!
        </h1>

        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            🛒 Sepet: <b>{cart.length}</b> ürün
          </Link>
        </div>
      </div>

      <section style={{ display: "flex", flexWrap: "wrap" }}>
        <Gear
          image="/goggles.jpg"
          name="Gözlük"
          brand="Arena"
          description="Yüzme için ideal gözlük"
          onAddToCart={() => addToCart("Gözlük")}
        />
        <Gear
          name="Bone"
          brand="Speedo"
          image="/swimcap.jpg"
          description="Dayanıklı silikon bone"
          onAddToCart={() => addToCart("Bone")}
        />
        <Gear
          name="Palet"
          brand="TYR"
          image="/fins.jpg"
          description="Ayak kaslarını güçlendiren palet"
          onAddToCart={() => addToCart("Palet")}
        />
      </section>
    </div>
  );
};

export default GearList;
