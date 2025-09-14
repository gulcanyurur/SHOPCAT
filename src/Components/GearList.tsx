import Footer from "./Footer";
import Navbar from "./Navbar";
import logo from "../imagesSrc/logo.png";

type GearProps = {
  name: string;
  brand: string;
  description: string;
  image: string;
};

const Gear = ({ name, brand, description, image }: GearProps) => {
  return (
    <article className="large">
      <img src={image} alt={name} width="200" />
      <h2>{name}</h2>
      <h3>{brand}</h3>
      <p>{description}</p>
    </article>
  );
};

const GearList = () => {
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

        <img src={logo} alt="ShopCat Logo" style={{ width: "170px",backgroundColor :" #f5f5f5",border:"none"}} />

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

        {/* Arama Barı */}
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

      {/* Navbar */}
      <Navbar />

      {/* Ürün Listesi */}
      <section>
        <Gear
          image="/goggles.jpg"
          name="Gözlük"
          brand="Arena"
          description="Yüzme için ideal gözlük"
        />
        <Gear
          name="Bone"
          brand="Speedo"
          image="/swimcap.jpg"
          description="Dayanıklı silikon bone"
        />
        <Gear
          name="Palet"
          brand="TYR"
          image="/fins.jpg"
          description="Ayak kaslarını güçlendiren palet"
        />
        <Gear
          image="/Denizhavlusu.jpg"
          name="Deniz havlusu"
          brand="Arena"
          description="Deniz havlusu"
        />
        <Gear
          image="/denizterligi.jpg"
          name="Deniz Terliği"
          brand="Arena"
          description="Rahat ve dayanıklı terlik"
        />
        <Gear
          image="/mayo.jpg"
          name="Mayo"
          brand="Arena"
          description="Yüzme için ideal mayo"
        />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GearList;


