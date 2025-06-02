function LivingBedroom() {
  const items = [
    {
      title: "Modern Bed",
      img: "/src/assets/livingmain.jpg",
    },
    {
      title: "Night Stand",
      img: "/src/assets/sofa.jpg",
    },
    {
      title: "Wardrobe",
      img: "/src/assets/masterbedroom.jpg",
    },
    
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-8">Living Bedroom Collection</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden text-center p-4"
          >
            <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
            <h2 className="text-lg font-semibold mt-4 text-gray-800">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LivingBedroom;
