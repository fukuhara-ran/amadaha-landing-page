import FacilityImage1 from "../assets/unsplash_uY2UIyO5o5c.png";
import FacilityImage2 from "../assets/unsplash_oK9EKfqv8HE.png";

export default function Facilities() {
  return (
    <section className="pt-20 md:pt-40 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Mobile Layout */}
          <div className="md:hidden">
            {/* Title - Centered on mobile */}
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-800 mx-auto w-52">
                Various <span className="text-teal-600">facilities</span> that
                you can enjoy
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mt-4 w-[90%] mx-auto">
                We bring you together with your dream holiday
              </p>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-4 mb-6 h-48">
              <img
                src={FacilityImage1}
                alt="Facility 1"
                className="rounded-lg object-cover w-full h-full shadow-md"
              />
              <img
                src={FacilityImage2}
                alt="Facility 2"
                className="rounded-lg object-cover w-full h-full shadow-md"
              />
            </div>

            {/* Button - Below images on mobile */}
            <div className="text-center">
              <button className="bg-teal-700 hover:bg-teal-900 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 cursor-pointer">
                Explore
              </button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-5 gap-12 items-center h-80">
            {/* Left side - Text content */}
            <div className="space-y-6 col-span-2 text-left">
              <h2 className="text-4xl font-bold text-gray-800 w-[90%]">
                Various <span className="text-teal-600">facilities</span> that
                you can enjoy
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed w-[90%]">
                We bring you together with your dream holiday
              </p>
              <button className="bg-teal-700 hover:bg-teal-900 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 cursor-pointer">
                Explore
              </button>
            </div>

            {/* Right side - Images */}
            <div className="grid grid-cols-2 col-span-3 gap-6 h-full">
              <img
                src={FacilityImage1}
                alt="Facility 1"
                className="rounded-lg object-cover w-full h-full shadow-md"
              />
              <img
                src={FacilityImage2}
                alt="Facility 2"
                className="rounded-lg object-cover w-full h-full shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
