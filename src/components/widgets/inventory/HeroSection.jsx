import React from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import {
  DirectionsCar,
  Flight,
  DirectionsBus,
  DirectionsBike,
} from "@mui/icons-material";

const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/public/images/home/hero.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white space-y-8">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            <span className="text-red-500">Rumble</span> Car Rentals
          </h1>
          <p className="mt-2 text-lg">
            Flexible plans for <span className="font-semibold">Daily Rent</span>{" "}
            and <span className="font-semibold">Monthly Subscriptions</span>.
          </p>
        </div>

        {/* Subscription Tabs */}
        <div className="flex space-x-4">
          <button className="px-6 py-2 rounded-md bg-red-500 text-white font-semibold hover:bg-red-600">
            Daily Rent
          </button>
          <button className="px-6 py-2 rounded-md bg-white text-black font-semibold hover:bg-gray-200">
            Monthly Subscription
          </button>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-md shadow-lg p-6 w-4/5 lg:w-2/3">
          <h2 className="text-xl font-bold text-black mb-4">Search for Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Pickup Location */}
            <TextField
              label="Pick Up Location"
              variant="outlined"
              fullWidth
              size="small"
            />

            {/* Drop-Off Location */}
            <TextField
              label="Drop Off Location"
              variant="outlined"
              fullWidth
              size="small"
            />

            {/* Pickup Date */}
            <TextField
              label="Pick Up Date/Time"
              type="datetime-local"
              variant="outlined"
              fullWidth
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />

            {/* Drop-Off Date */}
            <TextField
              label="Drop Off Date/Time"
              type="datetime-local"
              variant="outlined"
              fullWidth
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />

            {/* Adults */}
            <FormControl fullWidth size="small">
              <InputLabel>Adults</InputLabel>
              <Select defaultValue={1} label="Adults">
                {[1, 2, 3, 4, 5].map((num) => (
                  <MenuItem value={num} key={num}>
                    {num}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Kids */}
            <FormControl fullWidth size="small">
              <InputLabel>Kids</InputLabel>
              <Select defaultValue={0} label="Kids">
                {[0, 1, 2, 3, 4].map((num) => (
                  <MenuItem value={num} key={num}>
                    {num}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {/* Search Button */}
          <div className="mt-4 flex justify-center">
            <Button
              variant="contained"
              fullWidth
              style={{
                backgroundColor: "#FF0000",
                color: "#FFF",
                width: "50%",
              }}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
