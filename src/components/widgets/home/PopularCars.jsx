export default function PopularCars() {
  const cars = [
    {
      name: "Tesla Model 3",
      price: "$80/day",
      image: "/images/home/car-tesla.png",
    },
    {
      name: "BMW X5",
      price: "$120/day",
      image: "/images/home/car-bmw.png",
    },
    {
      name: "Audi A4",
      price: "$90/day",
      image: "/images/home/car-audi.png",
    },
    {
      name: "Mercedes GLC",
      price: "$100/day",
      image: "/images/home/car-mercedes.png",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Popular Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div key={car.name} className="bg-white shadow-lg rounded-lg p-6">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-gray-700">{car.price}</p>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
