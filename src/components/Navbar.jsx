import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 w-full shadow-xl flex items-center h-20">
      {/* Logo Section */}
      <Link 
        to="/" 
        className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 ml-8"
      >
        JobHuntPal
      </Link>

      {/* Centered Menu Links */}
      <div className="flex gap-12 justify-center items-center flex-1 absolute left-1/2 transform -translate-x-1/2">
        <Link
          to="/add-job"
          className="text-lg font-medium hover:text-indigo-400 transition duration-300 transform hover:scale-105 tracking-wide"
        >
          Add Job
        </Link>
        <Link
          to="/dashboard"
          className="text-lg font-medium hover:text-indigo-400 transition duration-300 transform hover:scale-105 tracking-wide"
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
