import React from 'react';

// Using an icon from a library like lucide-react (if available)
// or an inline SVG would be a great addition.
// For simplicity, we'll use a simple text arrow.
const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const Hero = () => {
  return (
    // Main container: Cute minimalist style with soft shadow
    <div className="max-w-7xl mx-auto my-12 overflow-hidden rounded-2xl shadow-lg shadow-violet-200/30">
      {/* Flex container for the 2-column layout. Col on mobile, row on desktop */}
      <div className="flex flex-col lg:flex-row bg-gradient-to-br from-violet-50 via-purple-50 to-blue-50">
        {/* Left Section (Text Content) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-16">
          {/* Content wrapper for text alignment and spacing */}
          <div className="text-gray-700 text-center lg:text-left">
            {/* "MY WORK" pre-header with accent color */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="w-10 h-0.5 bg-violet-400"></span>
              <span className="font-semibold text-sm text-violet-500 tracking-wider uppercase">
                MY WORK
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 my-4 tracking-tight leading-tight">
              MY PORTFOLIO
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              I build modern web applications and love to create music.
            </p>

            {/* Call to Action Button - Pink accent */}
            <a
              href="#projects"
              className="group inline-flex items-center justify-center px-8 py-3 bg-violet-500 text-white font-semibold rounded-lg shadow-md hover:bg-violet-600 transition-all duration-300 transform hover:scale-105"
            >
              VIEW PROJECTS
              <ArrowRight />
            </a>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto">
          <img
            src="https://placehold.co/800x800/f3e8ff/d8b4fe?text=My+Projects"
            alt="Portfolio projects"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                'https://placehold.co/800x800/e9d5ff/c084fc?text=Image+Not+Found';
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

