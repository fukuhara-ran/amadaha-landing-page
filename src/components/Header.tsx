import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

const villas = [
  {
    name: "Ocean Breeze Suite",
  },
  {
    name: "Garden Villa Retreat",
  },
  {
    name: "Tropical Paradise Villa",
  },
  {
    name: "Luxury Beachfront Villa",
  },
  {
    name: "Mountain View Retreat",
  },
  {
    name: "Traditional Javanese House",
  },
  {
    name: "Modern Family Villa",
  },
  {
    name: "Presidential Suite",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileVillaCategoryOpen, setIsMobileVillaCategoryOpen] =
    useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left side - Logo and Collapsible Menu */}
        <div className="flex items-center space-x-6">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-1 text-white hover:text-teal-400 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Collapsible Menu */}
            {isMenuOpen && (
              <div className="absolute top-14 left-48 w-36 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <a
                  href="#about"
                  className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <span className="block px-4 py-3 text-gray-700 cursor-default">
                  Villa Category
                </span>
                <a
                  href="#gallery"
                  className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </a>
              </div>
            )}

            {/* Villa Category Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 text-white hover:text-teal-400 transition-colors"
              >
                <span>Villa Category</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Villa List Dropdown - Scrollable */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden max-h-64 overflow-y-auto">
                  {villas.map((villa, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors border-b border-gray-50 last:border-b-0"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">
                          {villa.name}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-teal-400"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Right side - Contact and Login */}
        <div className="hidden lg:flex items-center space-x-8">
          <a
            href="#contact"
            className="text-white hover:text-teal-400 transition-colors"
          >
            Contact Us
          </a>
          <button className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-2 rounded-lg font-medium transition-colors cursor-pointer">
            Login
          </button>
        </div>
      </div>

      {/* Mobile Collapsible Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a
              href="#about"
              className="block text-gray-700 hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>

            {/* Mobile Villa Category - Clickable with nested dropdown */}
            <div className="py-2">
              <button
                onClick={() =>
                  setIsMobileVillaCategoryOpen(!isMobileVillaCategoryOpen)
                }
                className="flex items-center justify-between w-full text-gray-700 hover:text-teal-600 transition-colors"
              >
                <span>Villa Category</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isMobileVillaCategoryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mobile Nested Villa Dropdown - Scrollable */}
              {isMobileVillaCategoryOpen && (
                <div className="mt-2 ml-4 max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  <div className="space-y-2 pr-2">
                    {villas.map((villa, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block text-sm text-gray-600 hover:text-teal-600 transition-colors py-1 hover:bg-gray-50 px-2 rounded"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileVillaCategoryOpen(false);
                        }}
                      >
                        <span>{villa.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#gallery"
              className="block text-gray-700 hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>

            <div className="border-t border-gray-200 pt-3 mt-3">
              <a
                href="#contact"
                className="block text-gray-700 hover:text-teal-600 transition-colors mb-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
              <button
                className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
