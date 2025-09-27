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

  // Cart with quantity logic
  type CartItem = Product & { quantity: number };
  // Convert cart to CartItem[] for display/logic
  const cartWithQty: CartItem[] = cart.reduce((acc: CartItem[], item) => {
    const found = acc.find((p) => p.id === item.id);
    if (found) {
      found.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const addToCart = (product: Product) => {
    // If product already in cart, increase quantity
    const exists = cart.find((p) => p.id === product.id);
    if (exists) {
      // Add a marker product (for legacy cart array), or just add again (for compatibility)
      setCart([...cart, product]);
    } else {
      setCart([...cart, product]);
    }
  };

  
  const bestsellers: Product[] = [
    { id: 1, category: "cat", image: "/KedimMaması.jpg", name: "Kedi Maması", brand: "Royal Canin", description: "Yetişkin kediler için tam besleyici mama" },
    { id: 7, category: "dog", image: "/KopekMaması.jpg", name: "Köpek Maması", brand: "ProPlan", description: "Yetişkin köpekler için mama" },
    { id: 202, category: "bird", image: "/KuşKafesi.jpg", name: "Kuş Kafesi", brand: "Ferplast", description: "Dayanıklı ve geniş kuş kafesi" },
    { id: 302, category: "fish", image: "/Akvaryum.jpg", name: "Akvaryum", brand: "AquaWorld", description: "Cam ve dayanıklı akvaryum" },
    { id: 401, category: "horse", image: "/AtYemi.jpg", name: "At Yemi", brand: "HorseFeed", description: "Vitamin ve mineralli at yemi" },
    { id: 501, category: "rabbit", image: "/TavsanYemi.jpg", name: "Tavşan Yemi", brand: "BunnyFood", description: "Vitaminli ve doğal tavşan yemi" },
    { id: 601, category: "Civciv", image: "/CivcivYemi.jpg", name: "Civciv Yemi", brand: "ChickFeed", description: "Büyüme destekli civciv yemi" },
  ];
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
    children,
  }: {
    product: Product;
    onAddToCart: () => void;
    children?: React.ReactNode;
  }) => (
    <article className="gear-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name} {children}</h2>
      <h3>{product.brand}</h3>
      <p>{product.description}</p>
      <button onClick={onAddToCart}>🛒 Sepete Ekle</button>
    </article>
  );

  let filteredProducts: Product[];
  if (category === "all") {
    filteredProducts = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  } else if (category === "bestseller") {
    filteredProducts = bestsellers.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  } else {
    filteredProducts = products.filter((p) => p.category === category && p.name.toLowerCase().includes(search.toLowerCase()));
  }

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
            🛒 Sepet: <b>{cartWithQty.reduce((sum, p) => sum + p.quantity, 0)}</b> ürün
          </Link>
        </div>
      </div>
      <Navbar setCategory={setCategory} />
      <section className="product-grid">
        {filteredProducts.map((p) => {
          const inCart = cartWithQty.find((item) => item.id === p.id);
          return (
            <Gear
              key={p.id}
              product={p}
              onAddToCart={() => addToCart(p)}
            >
              {inCart && inCart.quantity > 1 && (
                <span style={{ fontWeight: 600, color: '#d81b60', marginLeft: 4 }}>
                  {inCart.quantity}x
                </span>
              )}
            </Gear>
          );
        })}
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
