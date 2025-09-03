import CTAImage from "../assets/unsplash_CHgZvJGs0xQ.png";
import CTAImageMobile from "../assets/unsplash_CHgZvJGs0xQ_mobile.png";

export default function CallToAction() {
  return (
    <section className="relative py-32 md:py-44 mt-20 md:mt-40 bg-gradient-to-r from-black/60 to-black/40">
      {/* Mobile Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center md:hidden"
        style={{
          backgroundImage: `url(${CTAImageMobile})`,
        }}
      ></div>

      {/* Desktop Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center hidden md:block"
        style={{
          backgroundImage: `url(${CTAImage})`,
        }}
      ></div>

      <div className="relative z-10 text-center md:text-left text-white">
        <div className="container mx-auto px-4">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-5xl font-bold mx-auto md:mx-0">
              Make your comfort is
            </h2>
            <h2 className="text-2xl md:text-5xl font-bold mb-8 md:mb-10 mx-auto md:mx-0">
              our happiness
            </h2>
          </div>
          <div className="flex justify-center md:justify-start">
            <button className="bg-white hover:bg-gray-200 text-teal-800 px-8 py-4 rounded-lg text-lg font-medium transition-colors cursor-pointer">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
