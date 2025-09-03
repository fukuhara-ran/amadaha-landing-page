import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-50 md:py-16 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-base md:text-2xl md:font-bold font-semibold md:mb-4 mb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 text-sm md:text-base"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 text-sm md:text-base"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 text-sm md:text-base"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base md:text-2xl md:font-bold font-semibold md:mb-4 mb-2">
              Villa Category
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 text-sm md:text-base"
                >
                  1-Bedroom Villa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 text-sm md:text-base"
                >
                  2-Bedroom Villa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 text-sm md:text-base"
                >
                  Joglo House
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 text-sm md:text-base"
                >
                  Premium Suite
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 text-sm md:text-base"
                >
                  Beachfront House
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base md:text-2xl md:font-bold text-center md:text-left font-semibold md:mb-4 mb-2">
              Contact Us
            </h3>
            <div className="md:space-y-3 flex justify-center md:flex-col">
              <p className="flex items-start text-sm md:text-base">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="md:flex hidden">
                  Jl. Bukit Pelangi, Gunung Geulis, Sukaraja, Kab. Bogor, Jawa
                  Barat
                </span>
              </p>
              <p className="flex items-center text-sm md:text-base">
                <Phone className="w-4 md:h-4 mr-2 flex-shrink-0" />
                <span className="md:flex hidden">+62 361 123 4567</span>
              </p>
              <p className="flex items-center text-sm md:text-base">
                <Mail className="w-4 md:h-4 mr-2 flex-shrink-0" />
                <span className="md:flex hidden">
                  reservations@villaamodaha.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
