

const GearList = () => {
  return (
    <div>
        <section>Swimming Gear Lİst </section>
        <Gear/>
        <Gear/>
        <Gear/>
      
    </div>
   
  )
}
const Gear = () => {
    return(
       <article>
         <h2>Gözlük </h2>
            <h3> Marka:Arena</h3>
            <p>Yüzme için kaliteli gözlük</p>
       </article>
           
        
    )
}

export default GearList
