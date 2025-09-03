import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import QuoteImage from "../assets/left_quote_2.svg";
import ArrowImage from "../assets/Vector_579.svg";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Travel Blogger",
      text: "Villa Amodaha exceeded all my expectations. The stunning ocean views and impeccable service made our honeymoon unforgettable.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      title: "Frequent Traveler",
      text: "The perfect escape from city life. Every detail was thoughtfully designed, and the staff went above and beyond to ensure our comfort.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
    },
    {
      name: "Emma Williams",
      title: "Family Traveler",
      text: "Our family vacation at Villa Amodaha was magical. The kids loved the pool, and we enjoyed the peaceful ambiance every evening.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
    },
    {
      name: "David Smith",
      title: "Adventure Traveler",
      text: "Absolutely incredible experience! The villa's amenities and the breathtaking surroundings made this the best vacation we've ever had.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
    },
    {
      name: "Lisa Rodriguez",
      title: "Luxury Traveler",
      text: "The attention to detail at Villa Amodaha is unmatched. From the moment we arrived, we felt like royalty. Highly recommend!",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop&crop=face",
    },
    {
      name: "James Wilson",
      title: "Business Traveler",
      text: "A truly luxurious retreat. The staff was incredibly welcoming and the facilities exceeded our expectations in every way.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face",
    },
  ];

  const nextSlide = () => {
    // Desktop: move by 3, Mobile: move by 1
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else {
      setCurrentIndex((prev) => (prev + 3) % testimonials.length);
    }
  };

  const prevSlide = () => {
    // Desktop: move by 3, Mobile: move by 1
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setCurrentIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
    } else {
      setCurrentIndex(
        (prev) => (prev - 3 + testimonials.length) % testimonials.length
      );
    }
  };

  const getCurrentTestimonials = () => {
    const current = [];
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Mobile: show only 1 testimonial
      current.push(testimonials[currentIndex]);
    } else {
      // Desktop: show 3 testimonials
      for (let i = 0; i < 3; i++) {
        current.push(testimonials[(currentIndex + i) % testimonials.length]);
      }
    }
    return current;
  };

  return (
    <section className="pt-20 md:pt-40 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header with Navigation */}
        <div className="flex justify-between items-center mb-8 md:mb-12 max-w-6xl mx-auto">
          <div className="flex items-center space-x-6">
            {/* Quote Image with Circle Background */}
            <div className="hidden absolute left-1/6 mb-24 w-24 h-24 bg-teal-600/10 rounded-full md:flex items-center justify-center">
              <img src={QuoteImage} alt="Quote" className="w-5 h-5" />
            </div>

            {/* Arrow Image */}
            <img
              src={ArrowImage}
              alt="Arrow"
              className="w-20 h-w-20 md:hidden flex absolute left-[32%] mt-2"
            />

            {/* Title */}
            <div className="md:space-y-2 md:z-20 z-0">
              <h2 className="text-xl md:text-4xl font-bold text-gray-800">
                What Our <span className="text-teal-600">Customers</span>
              </h2>
              <h2 className="text-xl md:text-4xl font-bold text-gray-800">
                Are Saying
              </h2>
            </div>
          </div>

          {/* Navigation Buttons Desktop */}
          <div className="hidden md:flex space-x-4">
            <button
              onClick={prevSlide}
              className="bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl h-60 mx-auto">
          {getCurrentTestimonials().map((testimonial, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className="bg-white rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 flex flex-col"
            >
              {/* Testimonial Text - Top */}
              <p className="text-gray-600 text-base mb-6 italic leading-relaxed flex-grow text-left">
                "{testimonial.text}"
              </p>

              {/* Avatar and Info - Bottom */}
              <div className="mt-auto flex">
                <div>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-teal-100"
                  />
                </div>
                <div className="text-left ml-4">
                  <h4 className="font-bold text-teal-600 text-base md:text-lg mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-800/40 md:text-sm text-xs font-medium">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons Mobile */}
        <div className="flex md:hidden space-x-4 justify-end mt-6">
          <button
            onClick={prevSlide}
            className="bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {/* Desktop Dots */}
          <div className="hidden md:flex space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 3)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    Math.floor(currentIndex / 3) === index
                      ? "bg-teal-600"
                      : "bg-gray-300"
                  }`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
