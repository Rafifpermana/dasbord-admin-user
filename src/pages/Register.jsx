import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // State untuk menyimpan input email, password, dan konfirmasi password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fungsi yang dijalankan saat tombol register ditekan
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validasi: Cek apakah password dan konfirmasi password sama
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Jika semua valid, cetak ke console dan arahkan ke halaman login
    console.log("Account Created:", email, password);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {/* Kotak form */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create a new account
        </h2>

        {/* Tampilkan error jika password tidak cocok */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* Form pendaftaran */}
        <form onSubmit={handleSubmit}>
          {/* Input Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Perbarui state email saat mengetik
              required
            />
          </div>

          {/* Input Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Perbarui state password
              required
            />
          </div>

          {/* Input Konfirmasi Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} // Perbarui state konfirmasi password
              required
            />
          </div>

          {/* Tombol Register */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Register
          </button>
        </form>

        {/* Navigasi ke halaman login jika sudah punya akun */}
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
