// components/Gallery.jsx
export default function Gallery() {
  const images = ["/car1.jpg", "/car2.jpg", "/car3.jpg", "/car4.jpg"];

  return (
    <div className="grid grid-cols-5 gap-2 my-4">
      <div className="col-span-3">
        <img
          src={images[0]}
          alt="Main Car"
          className="w-full h-72 object-cover rounded"
        />
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-2">
        {images.slice(1).map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Car ${idx + 1}`}
            className="w-full h-36 object-cover rounded"
          />
        ))}
      </div>
    </div>
  );
}
