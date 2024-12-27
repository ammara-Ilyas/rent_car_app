// components/BookingSummary.jsx
import { Button } from "@mui/material";

export default function BookingSummary() {
  return (
    <div className="border p-4 rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-2">Location: Japan</h2>
      <p className="text-gray-600">Start Date: 10 Aug 2023</p>
      <p className="text-gray-600">End Date: 14 Aug 2023</p>
      <div className="my-4">
        <p className="font-bold">Booking Summary</p>
        <div className="flex justify-between text-gray-600">
          <span>Rental Charges (5 days):</span>
          <span>¥100,000</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Taxes and Charges:</span>
          <span>¥5,000</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total:</span>
          <span>¥125,000</span>
        </div>
      </div>
      <Button variant="contained" color="primary" fullWidth>
        Proceed
      </Button>
    </div>
  );
}
