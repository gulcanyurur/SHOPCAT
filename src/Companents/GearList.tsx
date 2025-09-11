import Footer from "./Footer";
import Navbar from "./Navbar";




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

      <h1>2500 TL ve Üzeri Alışverişlerde İstanbul İçi Kargo Bedava! 
         
      <div className="navbar-search">
        <input type="text" placeholder="Ürün ara..." />
        <button>🔍</button>
      </div>
      </h1>
      <Navbar />
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
          name="Deniz havlusu "
         brand="Arena"
         
          description="Deniz havlusu"
        />
          <Gear
         image="/denizterligi.jpg"
          name="Deniz Terliği"
         brand="Arena"
         
          description="Yüzme için ideal gözlük"
        />
          <Gear
         image="/mayo.jpg"
          name="Mayo"
         brand="Arena"
         
          description="Yüzme için ideal gözlük"
        />
         
     
      </section>
      <Footer/>
    </div>
  );
};

export default GearList;
