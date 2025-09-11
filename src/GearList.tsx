import Navbar from "./Navbar";





type GearProps = {
  name: string;
  brand: string;
  description: string;
  image: string;
};

const Gear = ({ name, brand, description, image }: GearProps) => {
  return (
    <article>
       
      <img src={image} alt={name} width="200" />
      <h2>{name}</h2>
      <h3>{brand}</h3>
      <p>{description}</p>
    </article>
    
  );
};

const GearList = () => {
  return (
    <div>
      <h1>Swimming Gear List</h1>
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

        <img  src ='https://m.media-amazon.com/images/I/81gKb9zLDTL._AC_SX679_.jpg'
        alt= 'Sırt çantası yüzme için ideal' width='130'  />
      
         
         
     
      </section>
    </div>
  );
};

export default GearList;
