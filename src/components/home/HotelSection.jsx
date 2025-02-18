const HotelSection = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //TODO
  };
  return (
    
    <div className="flex w-full justify-center items-center">
      <div>
        {/* Background Section */}
        <div
          style={{ backgroundImage: `url(/images/book-form.png)` }}
          className="relative bg-cover bg-center bg-no-repeat w-full h-auto border flex justify-center md:justify-between"
        >
          <div className="absolute inset-0 bg-defined-green opacity-50"></div>

          <div className="relative z-10 p-6 w-full md:flex-row text-white">
            <div className="flex flex-col gap-4 items-center justify-center">
              <h1 className="text-3xl font-bold  text-center">
                Get the Best Comfort in Our Hotel
              </h1>
              <p className="text-center">
                Experience the best comfort at Levi Homestay, the top choice in
                Siliguri! Our AC and Non-AC rooms are designed for ultimate
                relaxation, offering a clean, peaceful, and homely stay. With
                exceptional service and a prime location, we ensure a
                hassle-free and cozy experience. Book your stay today and feel
                at home with us! Comfort redefined!
              </p>
              <button
                className="bg-white text-xl text-defined-green py-2 px-8 rounded-sm transition-all duration-300 font-semibold hover:bg-gray-200"
              >
                Book Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSection;
