// components/Specifications.jsx
export default function Specifications() {
  const specs = [
    { label: "Model", value: "Nissan GT-R" },
    { label: "Seats", value: "4" },
    { label: "Transmission", value: "Automatic" },
    { label: "Fuel", value: "Petrol" },
    { label: "Engine", value: "3.8L V6" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 my-4">
      {specs.map((spec, idx) => (
        <div key={idx} className="flex justify-between border-b pb-2">
          <span className="font-medium">{spec.label}</span>
          <span className="text-gray-600">{spec.value}</span>
        </div>
      ))}
    </div>
  );
}
