import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import loginLottie from "../../assets/Lottie-File/login-lottie.json";
import Lottie from "lottie-react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useRef } from "react";
import useAuth from "../../Hooks/useAuth";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCaptchaSubmit = () => {
    const captchaValue = captchaRef.current.value;
    if (validateCaptcha(captchaValue)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        navigate("/");
      })
      .catch((e) => console.log("something is fucking ", e.message));
  };

  return (
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
          Login to Your Account
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
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
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-sm text-indigo-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {/* ************captcha*********** */}
          <div className="mb-6 ">
            <LoadCanvasTemplate />
            <input
              type="text"
              ref={captchaRef}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button type="button" onClick={handleCaptchaSubmit} className="btn">
              Submit Captcha
            </button>
          </div>
          <button
            disabled={disabled}
            type="submit"
            className={`w-full py-2 rounded-lg transition duration-300 ${
              disabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-500 hover:bg-indigo-700"
            }`}
          >
            Login
          </button>
          <div className="flex items-center justify-center mt-4">
            <button
              type="button"
              className="flex items-center border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              <FcGoogle className="mr-2 text-xl" />
              Login with Google
            </button>
          </div>
          <p className="mt-4 text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-indigo-500 underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
