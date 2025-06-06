import "../CollectionsSection.css";
function CommercialFurniture() {
  const items = [
  {
    title: "Customizable Workstations",
    img: "src/commercial/Customizable Workstations.jpeg",
  },
  {
    title: "Executive Office Desks",
    img: "src/commercial/Executive Office Desks.jpeg",
  },
  {
    title: "Spacious Study Tables",
    img: "src/commercial/Spacious Study Tables.jpeg",
  },
  { title: "Sophisticated Bookshelves", img: "src/commercial/Sophisticated Bookshelves.jpeg" },
  { title: "Multi-Purpose Storage Units", img: "src/commercial/Multi-Purpose Storage Units.jpeg" },
  { title: "Ergonomic Office Chairs", img: "src/commercial/Ergonomic Office Chairs.jpeg" },
  {
    title: "Modular File Cabinets",
    img: "src/commercial/Modular File Cabinets.jpeg",
  },
  { title: "Minimalist Study Chairs", img: "src/commercial/Minimalist Study Chairs.jpeg" },
];

  return (
    <section
      id="commercial-furniture"
      className="section-wrapper p-8 max-w-7xl mx-auto mt-24"
    >
      <h1 className="section-title text-2xl font-bold text-white mb-8 text-center border-b-2 border-t-2 py-5">
        Study & Home Office Furniture
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

export default CommercialFurniture;
