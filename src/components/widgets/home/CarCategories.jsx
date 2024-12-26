export default function CarCategories() {
  const categories = [
    { name: "SUV", image: "/images/home/category-suv.png" },
    { name: "Sedan", image: "/images/home/category-sedan.png" },
    { name: "Luxury", image: "/images/home/category-luxury.png" },
    { name: "Convertible", image: "/images/home/category-convertible.png" },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Car Categories</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-32 h-32 mb-4"
              />
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
