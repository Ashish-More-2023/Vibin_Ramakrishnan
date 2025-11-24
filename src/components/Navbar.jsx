import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/iitg_logo.jpg";

function Navbar() {
  return (
    <nav className="min-w-full px-8 py-4 flex items-center justify-between bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center h-14">
        <img 
          src={Logo} 
          alt="Logo" 
          className="h-full w-auto max-w-[200px] object-contain" 
        />
      </div>
      <div className="flex gap-8 items-center">
        <Link 
          to="/" 
          className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
        >
          Home
        </Link>
        <Link 
          to="/research" 
          className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
        >
          Research
        </Link>
        <Link 
          to="/teaching" 
          className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
        >
          Teaching
        </Link>
        <Link 
          to="/resume" 
          className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
        >
          Resume
        </Link>
        <Link 
          to="/MID-lab" 
          className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
        >
          MID Lab
        </Link>
        <Link 
          to="/publications" 
          className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
        >
          Publications
        </Link>
        <Link 
          to="/patents" 
          className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
        >
          Patents
        </Link>
        <Link 
          to="/outreach" 
          className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
        >
          Outreach
        </Link>
        <Link 
          to="/computational-tools" 
          className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
        >
          Computational Tools
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
