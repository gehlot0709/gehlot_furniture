import "../CollectionsSection.css";
function DiningKitchen() {
  const items = [
    {
      title: "Modular Kitchen for all styles",
      img: "src/dining/Modular-Kitchen-for-all-styles.jpeg",
    },
    {
      title: "Dining Tables",
      img: "src/dining/6 Seater Dining Table Sets.jpeg",
    },
    {
      title: "6 Seater Dining Table Sets",
      img: "src/dining/Dining-Tables.jpeg",
    },
    { title: "Bar Cabinets", img: "src/dining/Bar Cabinets.jpeg" },
    { title: "Crockery Units", img: "src/dining/Crockery Units.jpeg" },
    { title: "Bar Stools", img: "src/dining/Bar Stools.jpeg" },
    {
      title: "Modular Kitchen Cabinets",
      img: "src/dining/Modular Kitchen Cabinets.jpeg",
    },
    { title: "Dining Chairs", img: "src/dining/Dining Chairs.jpeg" },
  ];

  return (
    <section
      id="dining-kitchen"
      className="section-wrapper p-8 max-w-7xl mx-auto mt-24"
    >
      <h1 className="section-title text-2xl font-bold text-white mb-8 text-center border-b-2 border-t-2 py-5">
        Dining-Kitchen
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-24">
        {items.map(({ title, img }) => (
          <div
            key={title}
            className="item bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden text-center p-4"
          >
            <div className="item-img">
              <img src={img} alt={title} className="w-full h-48 object-contain" />
            </div>
            <h2 className="text-lg font-semibold mt-4 text-gray-800">
              {title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DiningKitchen;
