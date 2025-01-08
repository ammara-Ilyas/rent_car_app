// pages/LoginPage.jsx
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
export default function LoginPage() {
  return (
    <>
      {" "}
      {/* Login Form Section */}
      <div className="container mx-auto  py-12 w-[80%] my-10 pl-20">
        <div className="flex flex-col border rounded-lg w-[90%] lg:flex-row shadow-lg items-center ">
          {/* Login Form */}
          <div className="w-full lg:w-[50%] p-6 bg-white rounded-l-md h-full">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <p className="text-gray-600 mb-6">Login to access your account</p>

            {/* Input Fields */}
            <form>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                className="mb-4"
                type="email"
              />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                className="mb-4"
                type="password"
              />

              {/* Remember Me and Forgot Password */}
              <div className="flex justify-between items-center mb-4">
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Remember Me"
                />
                <Link href="/register" className="text-red-600 text-sm">
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                className="mb-4 bg-red-600 text-white py-[10px]"
              >
                Login
              </Button>

              {/* Sign Up Link */}
              <div className="text-center">
                <p className="text-black">
                  Don't have an account?{" "}
                  <Link href="/register" className="text-red-600">
                    Sign up
                  </Link>
                </p>
              </div>
            </form>

            {/* Social Login */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">Or login with</p>
              <div className="flex justify-center gap-4 ">
                <Button variant="outlined" className="flex-1 ">
                  <FaFacebook className="" />
                </Button>
                <Button variant="outlined" className="flex-1">
                  <FaFacebook />
                </Button>
              </div>
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
    </>
  );
}
