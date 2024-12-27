import React from "react";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
        {/* Signup Form Section */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>
          <p className="text-gray-600 mb-6">Login to access your account</p>

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                size="small"
                className="bg-white"
              />
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                size="small"
                className="bg-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                size="small"
                className="bg-white"
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                size="small"
                className="bg-white"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 mb-4">
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                size="small"
                className="bg-white"
              />
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                size="small"
                className="bg-white"
              />
            </div>

            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="I agree to all the Terms and Privacy Policies."
            />

            <Button
              variant="contained"
              fullWidth
              color="error"
              className="bg-red-600 hover:bg-red-700 text-white mt-4"
            >
              Login
            </Button>
          </form>

          <p className="text-gray-600 text-center mt-4">
            Don't have an account?{" "}
            <a href="#" className="text-red-500 font-medium">
              Sign up
            </a>
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="contained"
              className="bg-black hover:bg-gray-800 text-white w-full"
              startIcon={<i className="fab fa-facebook-f"></i>}
            >
              F
            </Button>
            <Button
              variant="contained"
              className="bg-black hover:bg-gray-800 text-white w-full"
              startIcon={<i className="fab fa-google"></i>}
            >
              G
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block">
          <img
            src="https://via.placeholder.com/600x800"
            alt="Car Image"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
