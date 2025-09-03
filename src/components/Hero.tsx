import HeroBg from "../assets/unsplash_rlwE8f8anOc.png";

export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-r from-black/40 to-transparent">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HeroBg})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20"></div>
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Make your comfort is our happiness
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Studio villa made of bamboo, located near the top of Mount Geulis
              with a stunning 180 degree bird's eye view.
            </p>
            <button className="bg-white text-teal-600 py-3 px-8 rounded-md text-lg font-semibold cursor-pointer hover:bg-gray-200 transition-all">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
