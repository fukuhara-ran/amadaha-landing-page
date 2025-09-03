import { ArrowRight } from "lucide-react";
import ImageGallery1 from "../assets/unsplash_RiOhen_OLPs.png";
import ImageGallery2 from "../assets/unsplash_-27u_GzlAFw.png";
import ImageGallery3 from "../assets/unsplash_xEaAoizNFV8.png";
import CircleVector from "../assets/Vector_578.svg";

export default function Galleries() {
  const galleryImages = [ImageGallery1, ImageGallery2, ImageGallery3];

  return (
    <section id="gallery" className="pt-5 md:pt-40 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Circle Vector */}
        <img
          src={CircleVector}
          alt="Circle"
          className="w-24 h-w-24 md:hidden flex absolute left-[45%] z-10 mt-1"
        />
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">
          Our <span className="text-teal-700">Gallery</span>
        </h2>

        {/* Unified Layout for both Mobile and Desktop */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 mx-auto max-w-7xl">
          {/* Left Side - Large Image */}
          <div className="relative">
            <img
              src={galleryImages[0]}
              alt="Gallery 1"
              className="rounded-lg object-cover w-full h-48 md:h-full hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Side - Two Stacked Images */}
          <div className="grid grid-rows-2 gap-4 md:gap-6">
            {/* First Image */}
            <div className="relative">
              <img
                src={galleryImages[1]}
                alt="Gallery 2"
                className="rounded-lg object-cover w-full h-22 md:h-full hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Second Image with More Photos Link */}
            <div className="relative">
              <img
                src={galleryImages[2]}
                alt="Gallery 3"
                className="rounded-lg object-cover w-full h-22 md:h-full hover:scale-105 transition-transform duration-300"
              />

              {/* More Photos Overlay */}
              <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                <a
                  href="#"
                  className="flex items-center space-x-2 text-white font-medium text-sm md:text-lg hover:text-teal-300 transition-colors"
                >
                  <span>More Photos</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
