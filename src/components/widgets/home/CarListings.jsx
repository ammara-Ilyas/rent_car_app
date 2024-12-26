import Image from "next/image";
import {
  Star,
  DirectionsCar,
  Person,
  LocalGasStation,
} from "@mui/icons-material";

const CarListings = () => {
  const cars = [
    {
      id: 1,
      image: "/images/cars/car1.png",
      name: "Toyota Camry SE 350",
      price: 50,
    },
    {
      id: 2,
      image: "/images/cars/car2.png",
      name: "Toyota Camry SE 350",
      price: 50,
    },
    {
      id: 3,
      image: "/images/cars/car3.png",
      name: "Toyota Camry SE 350",
      price: 50,
    },
    {
      id: 4,
      image: "/images/cars/car4.png",
      name: "Toyota Camry SE 350",
      price: 50,
    },
    {
      id: 5,
      image: "/images/cars/car5.png",
      name: "Toyota Camry SE 350",
      price: 50,
    },
    {
      id: 6,
      image: "/images/cars/car6.png",
      name: "Toyota Camry SE 350",
      price: 50,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-gray-500">Lorem Ipsum is Simply Dummy Text</p>
        <h1 className="text-4xl font-bold">
          LOREM IPSUM IS <span className="text-red-600">SIMPLY DUMMY TEXT</span>
        </h1>
      </div>

      {/* Filters */}
      <div className="flex justify-center space-x-4 mb-8">
        <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">
          Show All
        </button>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
          Brakes
        </button>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
          Suspension
        </button>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
          Wheels
        </button>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
          Steering
        </button>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="border rounded-lg shadow-md overflow-hidden"
          >
            {/* Image */}
            <div className="relative">
              <Image
                src={car.image}
                alt={car.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                New
              </span>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Title */}
              <h3 className="text-xl font-bold mb-2">{car.name}</h3>
              {/* Features */}
              <div className="flex items-center text-gray-500 text-sm space-x-4 mb-4">
                <span className="flex items-center">
                  <DirectionsCar fontSize="small" className="mr-1" /> Auto
                </span>
                <span className="flex items-center">
                  <Person fontSize="small" className="mr-1" /> 5 Persons
                </span>
                <span className="flex items-center">
                  <LocalGasStation fontSize="small" className="mr-1" /> Petrol
                </span>
              </div>
              {/* Price */}
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-red-600">
                  ${car.price} / Day
                </p>
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarListings;
