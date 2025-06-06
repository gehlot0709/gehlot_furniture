import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="bg-white text-black fixed left-0 right-0 top-0 z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold uppercase">Gehlot furniture</h1>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-gray-300">
                Shop
              </Link>
            </li>
            <li
              className="relative group py-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="cursor-pointer  select-none">Collections ▼</span>
              <ul
                className={`absolute left-0 top-10 w-48 bg-white shadow-lg rounded ${
                  dropdownOpen ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link
                    to="/living-bedroom"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-white"
                  >
                    Living Bedroom
                  </Link>
                </li>
                <li>
                  <Link
                    to="/master-bedroom"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-white"
                  >
                    Master Bedroom
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dining-kitchen"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-white"
                  >
                    Dining Set & Kitchen
                  </Link>
                </li>
                <li>
                  <Link
                    to="/commercial-furniture"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-white"
                  >
                    Commercial Furniture
                  </Link>
                </li>
                <li>
                  <Link
                    to="/outdoor"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-white"
                  >
                    Outdoor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sofas"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-white"
                  >
                    Sofas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/storage"
                    className="hover:text-white block px-4 py-2 hover:bg-gray-700"
                  >
                    Storage
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white text-black`}>
        <ul>
          <li>
            <Link to="/" className="block py-2 px-4 hover:bg-gray-700 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="block py-2 px-4 hover:bg-gray-700 hover:text-white hover:text-white">
              Shop
            </Link>
          </li>
          <li>
            <button
              className="w-full text-left block py-2 px-4 hover:bg-gray-700 focus:outline-none hover:text-white"
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              Collections {mobileDropdownOpen ? "▲" : "▼"}
            </button>
            {mobileDropdownOpen && (
              <ul className="pl-4 bg-white">
                <li>
                  <Link
                    to="/living-bedroom"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsOpen(false)} // close menu on click
                  >
                    Living Bedroom
                  </Link>
                </li>
                <li>
                  <Link
                    to="/master-bedroom"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Master Bedroom
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dining-kitchen"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Dining Set & Kitchen
                  </Link>
                </li>
                <li>
                  <Link
                    to="/commercial-furniture"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Commercial Furniture
                  </Link>
                </li>
                <li>
                  <Link
                    to="/outdoor"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Outdoor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sofas"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Sofas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/storage"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Storage
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/contact" className="block py-2 px-4 hover:bg-gray-700 hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
