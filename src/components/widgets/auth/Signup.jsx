import React from "react";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import Link from "next/link";
const SignupPage = () => {
  return (
    <div className="container mx-auto  py-12 w-[95%] md:w-[80%] lg:w-[95%] xl:w-[80%] my-10 sm:pl-20">
      <div className="flex flex-col border rounded-lg w-[98%] sm:w-[90%] lg:flex-row shadow-lg items-center ">
        {/* Signup Form Section */}
        <div className="w-full lg:w-[50%] p-6 bg-white rounded-l-md h-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign Up</h2>
          <p className="text-gray-600 mb-6">Register to access your account</p>

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
              Register
            </Button>
          </form>

          <p className="text-gray-600 text-center mt-4">
            Do have account?{" "}
            <Link href="/login" className="text-red-500 font-medium">
              Login
            </Link>
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
        <div
          className="w-full lg:w-1/2  h-[584px] rounded-r-lg p-2 "
          style={{
            backgroundImage: `url("/images/bg_01.webp")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SignupPage;
