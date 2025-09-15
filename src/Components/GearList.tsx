import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import logo from "../imagesSrc/logo.png";

type GearProps = {
  name: string;
  brand: string;
  description: string;
  image: string;
  onAddToCart: () => void;
};

const Gear = ({ name, brand, description, image, onAddToCart }: GearProps) => {
  return (
    <article className="large" style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", borderRadius: "8px" }}>
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

const GearList = () => {
  const [cart, setCart] = useState<string[]>([]);

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
        <img
          src={logo}
          alt="ShopCat Logo"
          style={{
            width: "170px",
            backgroundColor: " #f5f5f5",
            border: "none",
          }}
        />

        <h1
          style={{
            margin: 0,
            fontSize: "20px",
            fontWeight: "bold",
            flex: 1,
            textAlign: "center",
          }}
        >
          2500 TL ve Üzeri Alışverişlerde İstanbul İçi Kargo Bedava!
        </h1>

        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div>
            🛒 Sepet: <b>{cart.length}</b> ürün
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <input
              type="text"
              placeholder="Ürün ara..."
              style={{
                padding: "5px 10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <button
              style={{
                padding: "6px 10px",
                border: "none",
                background: "#e91e63",
                color: "white",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              🔍
            </button>
          </div>
        </div>
      </div>

      <Navbar />

 
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
        <Gear
          image="/Denizhavlusu.jpg"
          name="Deniz havlusu"
          brand="Arena"
          description="Deniz havlusu"
          onAddToCart={() => addToCart("Deniz havlusu")}
        />
        <Gear
          image="/denizterligi.jpg"
          name="Deniz Terliği"
          brand="Arena"
          description="Rahat ve dayanıklı terlik"
          onAddToCart={() => addToCart("Deniz Terliği")}
        />
        <Gear
          image="/mayo.jpg"
          name="Mayo"
          brand="Arena"
          description="Yüzme için ideal mayo"
          onAddToCart={() => addToCart("Mayo")}
        />
      </section>

      <Footer />
    </div>
  );
};

export default GearList;
