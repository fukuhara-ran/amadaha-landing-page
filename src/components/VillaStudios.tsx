import { Users, Bed } from "lucide-react";
import ImageCard1 from "../assets/Card/unsplash_6P88lQXRfvc.png";
import ImageCard2 from "../assets/Card/unsplash_O_2S7teO9I0.png";
import ImageCard3 from "../assets/Card/unsplash__Swg04CP0bU.png";

export default function VillaStudios() {
  const villas = [
    {
      id: 1,
      name: "Ocean Breeze Suite",
      image: ImageCard1,
      price: 350,
      beds: 2,
      maxGuests: 4,
      mainFacilities: [
        "Wifi profide",
        "TV & karaoke",
        "kitchen",
        "swimming pool",
      ],
    },
    {
      id: 2,
      name: "Garden Villa Retreat",
      image: ImageCard2,
      price: 425,
      beds: 3,
      maxGuests: 6,
      mainFacilities: [
        "Wifi profide",
        "TV & karaoke",
        "kitchen",
        "swimming pool",
      ],
    },
    {
      id: 3,
      name: "Tropical Paradise Villa",
      image: ImageCard3,
      price: 380,
      beds: 2,
      maxGuests: 4,
      mainFacilities: [
        "Wifi profide",
        "TV & karaoke",
        "kitchen",
        "swimming pool",
      ],
    },
  ];

  return (
    <section id="villas" className="pt-20 md:pt-40 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-center md:text-4xl text-gray-800 md:mb-4">
          Our Choice of <span className="text-teal-600">Villa Studios</span>
        </h2>
        <p className="text-gray-600 text-center hidden md:mb-12 max-w-2xl mx-auto">
          Experience luxury and comfort in our carefully selected villa studios,
          each offering unique amenities and breathtaking views.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {villas.map((villa) => (
            <div
              key={villa.id}
              className="bg-white hover:bg-teal-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="p-5">
                {/* Image - Made more dominant */}
                <div className="relative overflow-hidden h-96">
                  <img
                    src={villa.image}
                    alt={villa.name}
                    className="w-full h-full rounded-xl object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Content - More compact */}
                <div className="p-4">
                  {/* Title */}
                  <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-white transition-colors duration-300">
                    {villa.name}
                  </h3>

                  {/* Main Facilities - Text only */}
                  <div className="mb-3">
                    <p className="text-xs text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
                      <span className="font-medium">Main facilities:</span>{" "}
                      {villa.mainFacilities.join(", ")}
                    </p>
                  </div>

                  {/* Bed and Guest Info */}
                  <div className="flex items-center justify-between mb-3 text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span className="text-sm">
                        {villa.beds} Bed{villa.beds > 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="text-sm">
                        Up to {villa.maxGuests} Guests
                      </span>
                    </div>
                  </div>

                  {/* Price and Book Button */}
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100 group-hover:border-gray-500 transition-colors duration-300">
                    <div>
                      <span className="text-xl font-bold text-teal-600 group-hover:text-white transition-colors duration-300">
                        ${villa.price}
                      </span>
                      <span className="text-gray-500 text-xs group-hover:text-gray-300 transition-colors duration-300">
                        /night
                      </span>
                    </div>
                    <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium text-sm cursor-pointer">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-teal-600 hover:bg-teal-50 border-2 border-teal-600 px-8 py-3 rounded-lg font-medium transition-colors duration-300 cursor-pointer">
            View More Villas →
          </button>
        </div>
      </div>
    </section>
  );
}
