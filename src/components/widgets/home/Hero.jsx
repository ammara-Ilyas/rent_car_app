import React from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
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
        backgroundImage: "url('public/images/home/hero.png')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">
            Lorem Ipsum <span className="text-red-500">simply dummy text</span>.
          </h1>
          <p className="mt-4 text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Lorem Ipsum
          </button>
        </div>
        <div className="absolute right-10 top-20 bg-white bg-opacity-90 rounded-md p-6 shadow-lg w-96">
          <h2 className="text-xl font-bold text-black mb-4">
            Search for Rental Cars
          </h2>
          <div className="grid gap-4">
            {/* Transport Icons */}
            <div className="flex justify-between">
              <DirectionsCar className="text-red-500" fontSize="large" />
              <Flight className="text-gray-500" fontSize="large" />
              <DirectionsBus className="text-gray-500" fontSize="large" />
              <DirectionsBike className="text-gray-500" fontSize="large" />
            </div>
            {/* Pickup Input */}
            <TextField
              label="Pick Up"
              variant="outlined"
              fullWidth
              size="small"
            />
            {/* Pickup Date/Time */}
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
            {/* Drop Off Input */}
            <TextField
              label="Drop Off"
              variant="outlined"
              fullWidth
              size="small"
            />
            {/* Drop Off Date/Time */}
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
            {/* Adults and Kids */}
            <div className="flex space-x-4">
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
            <Button
              variant="contained"
              fullWidth
              style={{ backgroundColor: "#FF0000", color: "#FFF" }}
            >
              SEARCH
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
