import { useState } from "react";

type NavbarProps = {
  setCategory: (category: string) => void;
};

const Navbar = ({ setCategory }: NavbarProps) => {
  const [active, setActive] = useState("all"); 

  const handleClick = (category: string) => {
    setCategory(category);
    setActive(category); 
  };

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <button 
            className={active === "all" ? "active" : ""} 
            onClick={() => handleClick("all")}
          >
            ☰ Tümü
          </button>
        </li>
        <li>
          <button 
            className={active === "bestseller" ? "active" : ""} 
            onClick={() => handleClick("bestseller")}
          >
            Çok Satanlar
          </button>
        </li>
        <li>
          <button 
            className={active === "cat" ? "active" : ""} 
            onClick={() => handleClick("cat")}
          >
            KEDİ
          </button>
        </li>
        <li>
          <button 
            className={active === "dog" ? "active" : ""} 
            onClick={() => handleClick("dog")}
          >
            KÖPEK
          </button>
        </li>
        <li>
          <button 
            className={active === "bird" ? "active" : ""} 
            onClick={() => handleClick("bird")}
          >
            KUŞ
          </button>
        </li>
        <li>
          <button 
            className={active === "fish" ? "active" : ""} 
            onClick={() => handleClick("fish")}
          >
            BALIK
          </button>
        </li>
        <li>
          <button 
            className={active === "horse" ? "active" : ""} 
            onClick={() => handleClick("horse")}
          >
            AT
          </button>
        </li>
        <li>
          <button 
            className={active === "rabbit" ? "active" : ""} 
            onClick={() => handleClick("rabbit")}
          >
            TAVŞAN
          </button>
        </li>
        <li>
          <button 
            className={active === "Civciv" ? "active" : ""} 
            onClick={() => handleClick("Civciv")}
          >
            Civciv
          </button>
        </li>
      </ul>

      <div className="navbar-banner">
        <span>% Günlük ihtiyaçlarda sepette %15 indirim %</span>
      </div>
    </nav>
  );
};

export default Navbar;

