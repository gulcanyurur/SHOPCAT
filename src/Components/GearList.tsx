import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../imagesSrc/logo.png";
import Navbar from "./Navbar";
import type { Product } from "../types/Product";
import { dogProducts } from "../types/dogProducts";
import { birdProducts } from "../types/birdProducts";
import { fishProducts } from "../types/fishProducts";
import { horseProducts } from "../types/horseProducts";
import { rabbitProducts } from "../types/rabbitProducts";
import { chickProducts } from "../types/chickProducts";

type GearListProps = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

const GearList = ({ cart, setCart }: GearListProps) => {
  const [category, setCategory] = useState("cat");
  const [search, setSearch] = useState("");

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const products: Product[] = [
    {
      id: 1,
      category: "cat",
      image: "/KedimMaması.jpg",
      name: "Kedi Maması",
      brand: "Royal Canin",
      description: "Yetişkin kediler için tam besleyici mama",
    },
    {
      id: 2,
      category: "cat",
      image: "/KediKumu.jpg",
      name: "Kedi Kumu",
      brand: "Ever Clean",
      description: "Topaklanan ve kokuyu hapseden kedi kumu",
    },
    {
      id: 3,
      category: "cat",
      image: "/KediOyuncagı.jpg",
      name: "Kedi Oyuncağı",
      brand: "PetLove",
      description: "Eğlenceli tüylü oyuncak",
    },
    {
      id: 4,
      category: "cat",
      image: "/TırmalamaTahtası.jpg",
      name: "Tırmalama Tahtası",
      brand: "CatTree",
      description: "Kedinizin tırnak sağlığı için ideal",
    },
    {
      id: 5,
      category: "cat",
      image: "/kediçantası.jpg",
      name: "Taşıma Çantası",
      brand: "PawSafe",
      description: "Hava alan ve rahat taşıma çantası",
    },
    {
      id: 6,
      category: "cat",
      image: "/Kediyatagı.jpg",
      name: "Kedi Yatağı",
      brand: "SoftPet",
      description: "Yumuşak ve rahat kedi yatağı",
    },
  ...dogProducts,
  ...birdProducts,
  ...fishProducts,
  ...horseProducts,
  ...rabbitProducts,
  ...chickProducts,
  ];

  const Gear = ({
    product,
    onAddToCart,
  }: {
    product: Product;
    onAddToCart: () => void;
  }) => (
    <article className="gear-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <h3>{product.brand}</h3>
      <p>{product.description}</p>
      <button onClick={onAddToCart}>🛒 Sepete Ekle</button>
    </article>
  );

  const filteredProducts = products.filter((p) => {
    if (category === "all") {
      return p.name.toLowerCase().includes(search.toLowerCase());
    }
    return p.category === category && p.name.toLowerCase().includes(search.toLowerCase());
  });

  const [dark, setDark] = useState(false);
  const toggleDark = () => {
    setDark((prev) => !prev);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="GearList">
      <div className="gearlist-header">
        <img src={logo} alt="ShopCat Logo" />
        <h1>2500 TL ve Üzeri Alışverişlerde İstanbul İçi Kargo Bedava!</h1>
        <div className="header-right">
          <input
            type="text"
            placeholder="Ürün ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-box"
          />
          <Link to="/cart">
            🛒 Sepet: <b>{cart.length}</b> ürün
          </Link>
        </div>
      </div>
      <Navbar setCategory={setCategory} />
      <section className="product-grid">
        {filteredProducts.map((p) => (
          <Gear key={p.id} product={p} onAddToCart={() => addToCart(p)} />
        ))}
      </section>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "32px 0 16px 0",
        }}
      >
        <button className="dark-toggle" onClick={toggleDark}>
          {dark ? "☀️ Aydınlık Moda Geç" : "🌙 Karanlık Moda Geç"}
        </button>
      </div>
    </div>
  );
};

export default GearList;
