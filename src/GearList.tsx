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
         image="/goggles.jpg"
          name="Gözlük"
         brand="Arena"
         
          description="Yüzme için ideal gözlük"
        />
          <Gear
         image="/goggles.jpg"
          name="Gözlük"
         brand="Arena"
         
          description="Yüzme için ideal gözlük"
        />
          <Gear
         image="/goggles.jpg"
          name="Gözlük"
         brand="Arena"
         
          description="Yüzme için ideal gözlük"
        />
      </section>
    </div>
  );
};

export default GearList;
