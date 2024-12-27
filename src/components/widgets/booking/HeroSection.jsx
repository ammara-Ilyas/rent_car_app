// components/HeroSection.jsx
import { Button } from "@mui/material";

export default function HeroSection() {
  return (
    <div
      className="relative h-64 bg-cover bg-center"
      style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Rumble</h1>
      </div>
    </div>
  );
}
