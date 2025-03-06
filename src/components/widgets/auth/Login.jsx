// pages/LoginPage.jsx
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
const NEXT_PUBLIC_BASE_URL = "https://restweb.azurewebsites.net/";
export default function LoginPage() {
  const router = useRouter();
  // State for form data
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload on submit
    setIsLoading(true); // Show loading state

    // Validate email and password
    if (!loginData.email || !loginData.password) {
      toast.error("Email and password are required.", {
        position: "top-right",
      });
      setIsLoading(false); // Stop loading
      return;
    }

    try {
      // Send POST request using fetch
      const response = await fetch(`${NEXT_PUBLIC_BASE_URL}/users/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password,
        }),
      });
      console.log("response", response);

      // Check if the response is OK
      if (response.ok) {
        const user = await response.json(); // Parse JSON response

        localStorage.setItem("token", JSON.stringify(user.user_id));
        console.log("response user", user);

        toast.success(`${user.message}! 🎉`, {
          position: "top-right",
        });

        // Reset form fields
        setLoginData({
          email: "",
          password: "",
        });

        // Navigate to the home page
        router.push("/");
      } else {
        // Handle errors (e.g., 400 Bad Request)
        const errorData = await response.json();
        console.log("error bad ", errorData);

        toast.error(errorData.detail || "Invalid email or password.", {
          position: "top-right",
        });
      }
    } catch (error) {
      // Handle network or unexpected errors
      console.error("Network error:", error);
      toast.error("Network error. Please try again.", {
        position: "top-right",
      });
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <>
      {" "}
      {/* Login Form Section */}
      <div className="container mx-auto  py-12 w-[95%] md:w-[80%] lg:w-[95%] xl:w-[80%] my-10 sm:pl-20">
        <div className="flex flex-col border rounded-lg w-[98%] sm:w-[90%] lg:flex-row shadow-lg items-center ">
          {/* Login Form */}
          <div className="w-full lg:w-[50%] p-6 bg-white rounded-l-md h-full">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <p className="text-gray-600 mb-6">Login to access your account</p>

            {/* Input Fields */}
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={loginData.email}
                onChange={handleChange}
                className="mb-4"
                type="email"
              />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                name="password"
                value={loginData.password}
                onChange={handleChange}
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
