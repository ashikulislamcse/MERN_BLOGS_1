import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <header className="flex justify-between items-center container mx-20 py-8">
        <Link to="/" className="text-3xl font-bold">
          My Blog
        </Link>
        <nav>
          <Link to="/login" className="mx-2 text-3xl hover:underline">
            Login
          </Link>
          <Link to="/register" className="mx-2 text-3xl hover:underline">
            Register
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
