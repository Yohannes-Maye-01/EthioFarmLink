
import { Link } from "@remix-run/react";


export default function Index() {
  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="w-full bg-white shadow-md fixed top-0 left-0">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <h1 className="w-[70px] h-[70px]"><img src="LOGO.png" alt="logo" /></h1>

          {/* Desktop Menu */}
          <nav className="hidde md:flex space-x-6 text-gray-700 font-medium">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <Link to="/services" className="hover:text-green-600">Services</Link>
            <Link to="/about" className="hover:text-green-600">About</Link>
            <Link to="/contact" className="hover:text-green-600">Contact</Link>
          </nav>

          {/* Login & Signup */}
          <div className=" md:flex space-x-4">
            <Link to="/login" className="px-4 py-2 text-green-700 border border-green-700 rounded-lg hover:bg-green-700 hover:text-white">Log In</Link>
            <Link to="/signup" className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">Sign Up</Link>
          </div>

        </div>

       
      </header>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center min-h-screen px-4 pt-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to FarmLink</h1>
        <p className="text-lg text-gray-600">
          Your one-stop solution for agricultural products and services.
        </p>
      </div>
    </div>
  );
}
