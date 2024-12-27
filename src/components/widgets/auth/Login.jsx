// pages/LoginPage.jsx
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";

export default function LoginPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-black">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-white text-2xl font-bold">Rumble</h1>
          <nav className="flex gap-4">
            <Button color="inherit" className="text-white">
              Home
            </Button>
            <Button color="inherit" className="text-white">
              Inventory
            </Button>
            <Button color="inherit" className="text-white">
              Blog
            </Button>
            <Button color="inherit" className="text-white">
              About
            </Button>
            <Button variant="contained" color="error">
              Booking Now
            </Button>
          </nav>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="container mx-auto py-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Login Form */}
          <div className="w-full lg:w-1/2 p-6 bg-white rounded shadow-lg">
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
                <a href="#" className="text-blue-600 text-sm">
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className="mb-4"
              >
                Login
              </Button>

              {/* Sign Up Link */}
              <div className="text-center">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <a href="#" className="text-blue-600">
                    Sign up
                  </a>
                </p>
              </div>
            </form>

            {/* Social Login */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">Or login with</p>
              <div className="flex justify-center gap-4">
                <Button variant="outlined" className="flex-1">
                  <i className="fab fa-facebook mr-2"></i> Facebook
                </Button>
                <Button variant="outlined" className="flex-1">
                  <i className="fab fa-google mr-2"></i> Google
                </Button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src="/path-to-your-image.jpg"
              alt="Car"
              className="rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
