import { useState } from "react";
import "../CSS/Navigations.css";
import Logo from "../Images/Logo/Blue LOGO .png";
import DownArrowIcon from "./DownArrowIcon";
import flag from "../Images/Flags/indian.jpg";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 shadow-md bg-white">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={Logo} alt="iostreak logo" className="h-8" />
      </div>

      {/* Mobile Menu Button */}
   
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 focus:outline-none">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
  
      {/* Navigation Links */}
      <nav className={`md:flex space-x-8 ${menuOpen ? "block absolute top-16 left-0 w-full bg-white shadow-md p-4" : "hidden md:block"}`}>
        <a href="" className="text-gray-800 font-medium hover:text-blue-600 block md:inline-block"  onClick={(e) => {
        e.preventDefault();
        const section = document.getElementById("industry");
        if (section) {
         section.scrollIntoView({ behavior: "smooth" });
    }
  }}>
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
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100"onClick={(e) => {
        e.preventDefault();
        const section = document.getElementById("services");
        if (section) {
         section.scrollIntoView({ behavior: "smooth" });
    }
  }} >
                Web Application Development
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100"onClick={(e) => {
        e.preventDefault();
        const section = document.getElementById("services");
        if (section) {
         section.scrollIntoView({ behavior: "smooth" });
    }
  }} >
                Artificial Intelligence Solutions
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100"onClick={(e) => {
        e.preventDefault();
        const section = document.getElementById("services");
        if (section) {
         section.scrollIntoView({ behavior: "smooth" });
    }
  }} >
                Cybersecurity Services (VAPT)
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100"onClick={(e) => {
        e.preventDefault();
        const section = document.getElementById("services");
        if (section) {
         section.scrollIntoView({ behavior: "smooth" });
    }
  }} >
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
        <a href="#" className="text-gray-800 font-medium hover:text-blue-600 block md:inline-block" onClick={(e) => {
        e.preventDefault();
        const section = document.getElementById("support");
        if (section) {
         section.scrollIntoView({ behavior: "smooth" });
    }
  }} >
          About
        </a>
      </nav>

      {/* Login Section - Hidden on Mobile */}
      <div className="hidden">
        <button className="Login">
          Log in
        </button>
        <span className="number">0101-1110-100</span>
        <img src={flag} alt="India Flag" className="flag" />
      </div>
    </header>
  );
};

export default Navigation;
