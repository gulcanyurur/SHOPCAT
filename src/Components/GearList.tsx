import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../imagesSrc/logo.png";
import Navbar from "./Navbar";

type GearListProps = {
  cart: string[];
  setCart: React.Dispatch<React.SetStateAction<string[]>>;
};

const GearList = ({ cart, setCart }: GearListProps) => {
  const [category, setCategory] = useState("cat");
  const [search, setSearch] = useState(""); 

  const addToCart = (item: string) => {
    setCart([...cart, item]);
  };

  const products = [
    { id: 1, category: "cat", image: "/KedimMaması.jpg", name: "Kedi Maması", brand: "Royal Canin", description: "Yetişkin kediler için tam besleyici mama" },
    { id: 2, category: "cat", image: "/KediKumu.jpg", name: "Kedi Kumu", brand: "Ever Clean", description: "Topaklanan ve kokuyu hapseden kedi kumu" },
    { id: 3, category: "cat", image: "/KediOyuncagı.jpg", name: "Kedi Oyuncağı", brand: "PetLove", description: "Eğlenceli tüylü oyuncak" },
    { id: 4, category: "cat", image: "/TırmalamaTahtası.jpg", name: "Tırmalama Tahtası", brand: "CatTree", description: "Kedinizin tırnak sağlığı için ideal" },
    { id: 5, category: "cat", image: "/kediçantası.jpg", name: "Taşıma Çantası", brand: "PawSafe", description: "Hava alan ve rahat taşıma çantası" },
    { id: 6, category: "cat", image: "/Kediyatagı.jpg", name: "Kedi Yatağı", brand: "SoftPet", description: "Yumuşak ve rahat kedi yatağı" },
    { id: 7, category: "dog", image: "/KopekMamasi.jpg", name: "Köpek Maması", brand: "ProPlan", description: "Yetişkin köpekler için mama" },
  ];

  
  const Gear = ({ name, brand, description, image, onAddToCart }: 
    { name: string; brand: string; description: string; image: string; onAddToCart: () => void }) => {
    return (
      <article className="gear-card">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <h3>{brand}</h3>
        <p>{description}</p>
        <button onClick={onAddToCart}>🛒 Sepete Ekle</button>
      </article>
    );
  };

  
  const filteredProducts = products.filter(
    (p) =>
      p.category === category &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

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

          <Link to="/cart">🛒 Sepet: <b>{cart.length}</b> ürün</Link>
        </div>
      </div>

      <Navbar setCategory={setCategory} />

   
      <section className="product-grid">
        {filteredProducts.map((p) => (
          <Gear
            key={p.id}
            image={p.image}
            name={p.name}
            brand={p.brand}
            description={p.description}
            onAddToCart={() => addToCart(p.name)}
          />
        ))}
      </section>
    </div>
  );
};

export default GearList;



