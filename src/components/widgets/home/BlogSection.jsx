export default function BlogSection() {
  const blogs = [
    {
      title: "Top 5 Cars for Road Trips",
      description:
        "Explore the best cars suited for long-distance road trips, offering comfort and performance.",
      image: "/images/home/blog-road-trip.png",
    },
    {
      title: "Benefits of Electric Cars",
      description:
        "Discover the advantages of switching to electric cars for a sustainable future.",
      image: "/images/home/blog-electric-cars.png",
    },
    {
      title: "Tips for Renting a Car",
      description:
        "Everything you need to know before renting a car, from insurance to mileage policies.",
      image: "/images/home/blog-car-rental-tips.png",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-8">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover"
              />
              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <button className="text-red-500 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
