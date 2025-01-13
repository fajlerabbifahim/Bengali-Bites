import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import loginLottie from "../../assets/Lottie-File/login-lottie.json";
import Lottie from "lottie-react";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const { registerUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    registerUser(data.email, data.password)
      .then((result) => {
        alert("User Create Successful");
        navigate("/");
      })
      .catch((e) => {
        alert(e.message);
      });
    reset();
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">
        {/* Left Side Image */}
        <div className="hidden md:block w-1/2">
          <Lottie
            animationData={loginLottie}
            loop={true}
            className="w-full h-auto object-cover"
          ></Lottie>
        </div>

        {/* Right Side Form */}
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6 md:w-1/2">
          <h2 className="text-2xl font-bold text-center mb-6">
            Create an Account
          </h2>
          <form onSubmit={handleSubmit(handleRegister)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.name && (
                <p className="text-red-600 font-medium">Name is Require</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.email && (
                <p className="text-red-600 font-medium">Email is Require</p>
              )}
            </div>
            <div className="mb-6 relative">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                placeholder="Create a password"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.password && (
                <p className="text-red-600 font-medium">
                  {" "}
                  Create a Strong Password
                </p>
              )}
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-sm text-indigo-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Register
            </button>
            <div className="flex items-center justify-center mt-4">
              <button
                type="button"
                className="flex items-center border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                <FcGoogle className="mr-2 text-xl" />
                Register with Google
              </button>
            </div>
            <p className="mt-4 text-sm text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-indigo-500 underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
