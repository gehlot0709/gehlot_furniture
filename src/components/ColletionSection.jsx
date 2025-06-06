import { Link } from "react-router-dom";
import "../CollectionsSection.css";

function CollectionsSection() {
  const collections = [
    {
      title: "Living Bedroom",
      img: "./src/assets/livingmain.jpg",
      link: "/living-bedroom",
    },
    {
      title: "Master Bedroom",
      img: "./src/assets/masterbedroom.jpg",
      link: "/master-bedroom",
    },
    {
      title: "Dining & Kitchen",
      img: "src/assets/kitchen.jpg",
      link : "dining-kitchen"
    },
    {
      title: "Commercial Furniture",
      img: "src/assets/commercial.jpg",
      link : "commercial-furniture"
    },
    {
      title: "Outdoor",
      img: "src/assets/outdoor.jpg",
    },
    {
      title: "Sofas & Storage",
      img: "src/assets/sofa.jpg",
    },
  ];

  return (
    <>
    <section id="collections" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Our Collections
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((item, index) => {
            const content = (
              <article
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden p-4 text-center"
              >
                <div className="collection-img">
                  <img src={item.img} alt={item.title} loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
              </article>
            );

            return item.link ? (
              <Link to={item.link} key={index}>
                {content}
              </Link>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
     <section className="service mt-24 mb-24" >
      <div>
        <img src="./src/assets/service.png" alt="" />
      </div>
    </section>
    </>
  );
}

export default CollectionsSection;
