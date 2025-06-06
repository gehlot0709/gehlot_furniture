function MainSection() {
  return (<>
    <main className=" py-1 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="container max-w-7xl mx-auto">
        <div className="  flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="main-content">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
               <span className="text-orange-400 sm:text-6xl lg:text-8xl">D</span>iscover Premium Furniture
              </h2>
              <p className="text-base sm:text-lg mb-10 text-gray-100 mt-10">
                Furniture Haven offers elegant and comfortable designs for every
                room. Explore our curated collections built to transform your
                space.
              </p>
              <a
                href="#collections"
                className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
              >
                Browse Collections
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="main-img">
              <img src="./src/assets/logo.png" alt="Furniture Display" />
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}

export default MainSection;
