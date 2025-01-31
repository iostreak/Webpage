import { useState } from "react";
import "../CSS/Navigations.css"; 
import Logo from "../Images/Logo/Blue LOGO .png";
import DownArrowIcon from "./DownArrowIcon";
import flag from "../Images/Flags/indian.jpg";
// this is vishal
const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // To track which dropdown is open

  // Function to toggle dropdown visibility
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id); // Toggle the dropdown on click
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 shadow-md bg-white">
      {/* Logo Section */}
      <div className="items-center">
        <img src={Logo} alt="iostreak logo" className="h-8" />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="text-gray-800 font-medium hover:text-blue-600">
          Industries
        </a>

        {/* Services Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("services")}
            className="text-gray-800 font-medium hover:text-blue-600 focus:outline-none"
          >
            Services <DownArrowIcon className="ml-1 w-5 h-5 text-blue-400" />
          </button>
          {openDropdown === "services" && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Web Application Development
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Artificial Intelligence Solutions
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Cybersecurity Services (VAPT)
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Consultancy Services
              </a>
            </div>
          )}
        </div>

        {/* Insight Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("insight")}
            className="text-gray-800 font-medium hover:text-blue-600 focus:outline-none"
          >
            Insight <DownArrowIcon className="ml-1 w-5 h-5 text-blue-400" />
          </button>
          {openDropdown === "insight" && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Web Development
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Cybersecurity
              </a>
            </div>
          )}
        </div>

        {/* About Link */}
        <a href="#" className="text-gray-800 font-medium hover:text-blue-600">
          About
        </a>
      </nav>

      {/* Login Section */}
      <div className="flex items-center space-x-4">
        <button className="border border-gray-400 px-4 py-2 rounded-full text-gray-800 hover:bg-gray-100">
          Log in
        </button>
        <span className="text-gray-800 font-bold">0101-1110-100</span>
        <img src={flag} alt="India Flag" className="h-5 w-5" />
      </div>
    </header>
  );
};

export default Navigation;
