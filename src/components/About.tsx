import AboutImage from "../assets/unsplash_-27u_GzlAFw-1.png";

export default function About() {
  return (
    <section id="about" className="pt-40 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-6 md:text-4xl md:mb-16 text-left md:text-left">
          About Villa <span className="text-teal-600">Amadaha</span>
        </h2>

        {/* Content */}
        <div className="flex flex-col md:grid md:grid-cols-5 gap-6 md:gap-10 items-center max-w-7xl">
          {/* Image - Full width on mobile */}
          <div className="w-full md:col-span-2">
            <img
              src={AboutImage}
              alt="Villa Amadaha"
              className="w-full h-auto shadow-2xl object-cover rounded-lg"
            />
          </div>

          {/* Content - Full width on mobile */}
          <div className="w-full md:col-span-3 md:mx-20 space-y-6 md:space-y-8">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-semibold text-left md:text-left">
              Villa Amadaha consist of Two Luxury Villas and one Traditional
              Javanese House surrounded by a tranquil rain forest setting,
              traditional Indonesian houses and a farm overlooking the area.
            </p>

            {/* Statistics Cards - Full width on mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-6 w-full">
              <div className="text-center p-4 md:p-6 bg-white rounded-lg shadow-md w-full">
                <div className="text-2xl md:text-3xl font-bold mb-2">
                  +6{" "}
                  <span className="text-teal-600 font-medium text-lg md:text-2xl">
                    / Room
                  </span>
                </div>
                <div className="text-gray-600 font-medium text-sm md:text-base">
                  Room Options
                </div>
              </div>
              <div className="text-center p-4 md:p-6 bg-white rounded-lg shadow-md w-full">
                <div className="text-2xl md:text-3xl font-bold mb-2">
                  +20{" "}
                  <span className="text-teal-600 font-medium text-lg md:text-2xl">
                    / Facilities
                  </span>
                </div>
                <div className="text-gray-600 font-medium text-sm md:text-base">
                  Facilities Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
