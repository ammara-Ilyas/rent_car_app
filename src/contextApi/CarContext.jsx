"use client";
import React, { createContext, useEffect, useReducer, useState } from "react";

// Initial Car Data
let carData = [
  {
    id: 1,
    carModel: "Toyota Camry SE 350",
    pricePerDay: 150,
    pricePerWeek: 900,
    pricePerMonth: 3600,
    available: true,
    description: "A reliable sedan with great fuel economy and comfort.",
    wheel: "17-inch alloy",
    suspension: "Independent suspension",
    steering: "Electric Power Steering",
    brakes: "Disc brakes",
    image: "https://via.placeholder.com/150/0000FF",
  },
  {
    id: 2,
    carModel: "Honda Civic LX",
    pricePerDay: 100,
    pricePerWeek: 600,
    pricePerMonth: 2400,
    available: true,
    description: "Compact and fuel-efficient, great for city driving.",
    wheel: "16-inch steel",
    suspension: "McPherson suspension",
    steering: "Rack and Pinion",
    brakes: "Drum brakes",
    image: "https://via.placeholder.com/150/FF0000",
  },
];

// Initial state for the context
const initialState = {
  cars: carData,
  selectedCars: [], // cars added to the booking
};

// Reducer function to manage state changes
function carReducer(state, action) {
  switch (action.type) {
    case "ADD_CAR":
      // Add car to booking
      return { ...state, selectedCars: [...state.selectedCars, action.car] };
    case "REMOVE_CAR":
      // Remove car from booking
      return {
        ...state,
        selectedCars: state.selectedCars.filter((car) => car.id !== action.id),
      };
    case "TOGGLE_AVAILABILITY":
      // Toggle the availability of a car
      return {
        ...state,
        cars: state.cars.map((car) =>
          car.id === action.id ? { ...car, available: !car.available } : car
        ),
      };
    default:
      return state;
  }
}

// Create Context
const CarContext = createContext();

export function CarProvider({ children }) {
  const [state, dispatch] = useReducer(carReducer, initialState);
  const [inventory, setInventory] = useState([]);
  const [forFilteredInventory, setforFilteredInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/inventory.json");
        let data = await response.json();
        console.log("data", data);
        setInventory(data);
        setforFilteredInventory(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <CarContext.Provider
      value={{
        state,
        dispatch,
        inventory,
        setInventory,
        forFilteredInventory,
        setforFilteredInventory,
        loading,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}

export const useCarContext = () => React.useContext(CarContext);
