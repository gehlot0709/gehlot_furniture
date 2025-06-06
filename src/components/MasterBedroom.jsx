import "../CollectionsSection.css";
function MasterBedroom() {
  const items = [
    { title: "Bed", img: "src/masterbedroom/Bed.jpeg" },
    { title: "Wardrobes", img: "src/masterbedroom/Wardrobes.jpeg" },
    { title: "Bedside Tables", img: "src/masterbedroom/Bedside Tables.jpeg" },
    { title: "Sofa Cum Beds", img: "src/masterbedroom/Sofa Cum Beds.jpeg" },
    { title: "Dressing Tables", img: "src/masterbedroom/Dressing Tables.jpeg" },
    { title: "Wall Mirrors", img: "src/masterbedroom/Wall Mirrors.jpeg" },
    { title: "Lamp and Lighting", img: "src/masterbedroom/Lamp and Lighting.jpeg" },
    { title: "Photo Frames", img: "src/masterbedroom/Photo Frames.jpeg" },
  ];

  return (
    <section id="master-bedroom" className="section-wrapper p-8 max-w-7xl mx-auto mt-24">
      <h1 className="section-title text-5xl font-bold text-white mb-8 text-center border-b-2 border-t-2 py-5">
        Master Bedroom
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

export default MasterBedroom;
