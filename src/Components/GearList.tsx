import { Link } from "react-router-dom";
import logo from "../imagesSrc/logo.png";
import Navbar from "./Navbar";

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
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "6px",
        }}
      />
      <h2 style={{ margin: "10px 0 5px" }}>{name}</h2>
      <h3 style={{ margin: "0 0 10px", color: "#555" }}>{brand}</h3>
      <p style={{ fontSize: "14px", color: "#666", minHeight: "40px" }}>
        {description}
      </p>
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
          gap: "50px",
        }}
      >
        <img src={logo} alt="ShopCat Logo" style={{ width: "170px" }} />

        <h1 style={{ flex: 1, textAlign: "center", fontSize: "20px" }}>
          2500 TL ve Üzeri Alışverişlerde İstanbul İçi Kargo Bedava!
        </h1>

        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            🛒 Sepet: <b>{cart.length}</b> ürün
          </Link>
        </div>
      </div>

      <Navbar />

 <section
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    padding: "20px",
  }}
>
  <Gear
    key="mama"
    image="/KedimMaması.jpg"
    name="Kedi Maması"
    brand="Royal Canin"
    description="Yetişkin kediler için tam besleyici mama"
    onAddToCart={() => addToCart("Kedi Maması")}
  />
  <Gear
    key="kumu"
    image="/KediKumu.jpg"
    name="Kedi Kumu"
    brand="Ever Clean"
    description="Topaklanan ve kokuyu hapseden kedi kumu"
    onAddToCart={() => addToCart("Kedi Kumu")}
  />
  <Gear
    key="oyuncak"
    image="/KediOyuncagı.jpg"
    name="Kedi Oyuncağı.jpg"
    brand="PetLove"
    description="Eğlenceli tüylü oyuncak"
    onAddToCart={() => addToCart("Kedi Oyuncağı")}
  />
  <Gear
    key="tirnak"
    image="/TırmalamaTahtası.jpg"
    name="Tırmalama Tahtası"
    brand="CatTree"
    description="Kedinizin tırnak sağlığı için ideal"
    onAddToCart={() => addToCart("Tırmalama Tahtası")}
  />
  <Gear
    key="canta"
    image="/kediçantası.jpg"
    name="Taşıma Çantası"
    brand="PawSafe"
    description="Hava alan ve rahat taşıma çantası"
    onAddToCart={() => addToCart("Taşıma Çantası")}
  />
  <Gear
    key="yatak"
    image="/Kediyatagı.jpg"
    name="Kedi Yatağı"
    brand="SoftPet"
    description="Yumuşak ve rahat kedi yatağı"
    onAddToCart={() => addToCart("Kedi Yatağı")}
  />
</section>


    </div>
  );
};

export default GearList;
