import { useState } from "react";
import { useNavigate } from "react-router-dom";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import github from "../assets/github.png";

const Login = () => {
  // State untuk menyimpan input email dan password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Fungsi yang akan dipanggil saat form disubmit
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Sign in to your account
        </h2>

        {/* Form login */}
        <form onSubmit={handleSubmit}>
          {/* Input email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Input password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Checkbox Remember me dan link lupa password */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>

          {/* Tombol submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign in
          </button>
        </form>

        {/* Divider teks */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Or continue with
        </div>

        {/* Tombol login dengan sosial media */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[facebook, github, google].map((icon, index) => (
            <a
              key={index}
              href="#"
              className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50"
            >
              <img className="h-5 w-5" src={icon} alt="Social Login" />
            </a>
          ))}
        </div>

        {/* Link untuk mendaftar akun baru */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <button
            onClick={() => navigate("/register")} // Tambahkan navigasi ke register
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
