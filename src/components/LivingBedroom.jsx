import "../CollectionsSection.css";
function LivingBedroom() {
  const items = [
    { title: "Tv units", img: "src/livingbedroom/tvunit.jpg" },
    { title: "Cabinets & Sideboards", img: "src/livingbedroom/Cabinets & Sideboards.jpg" },
    { title: "Coffee Tables & Center Tables", img: "src/livingbedroom/tea-concept.jpg" },
    { title: "Wall Shelves", img: "src/livingbedroom/Wall Shelves.jpeg" },
    { title: "Side Tables", img: "src/livingbedroom/Side Tables.jpeg" },
    { title: "Shoe Racks", img: "src/livingbedroom/Shoe Racks.jpeg" },
    { title: "Sofa Set", img: "src/livingbedroom/Sofa Set.jpeg" },
    { title: "Lounge Chairs", img: "src/livingbedroom/Lounge Chairs.jpeg" },
  ];

  return (
    <section id="living-bedroom" className="section-wrapper p-8 max-w-7xl mx-auto mt-24">
      <h1 className="section-title text-2xl font-bold text-white mb-8 text-center border-b-2 border-t-2 py-5">
        Living Bedroom Collection
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-24">
        {items.map(({ title, img }) => (
          <div key={title} className="item bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden text-center p-4">
            <div className="item-img">
              <img src={img} alt={title} className="w-full h-48 object-contain" />
            </div>
            <h2 className="text-lg font-semibold mt-4 text-gray-800">{title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LivingBedroom;
