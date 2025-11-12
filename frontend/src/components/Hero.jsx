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
    // Main container: Dark theme, subtle blue glow shadow
    <div className="max-w-7xl mx-auto my-12 overflow-hidden rounded-xl shadow-2xl shadow-blue-700/20">
      {/* Flex container for the 2-column layout. Col on mobile, row on desktop */}
      <div className="flex flex-col lg:flex-row bg-slate-900">
        {/* Left Section (Text Content) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-16">
          {/* Content wrapper for text alignment and spacing */}
          <div className="text-slate-200 text-center lg:text-left">
            {/* "MY WORK" pre-header with accent color */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="w-10 h-0.5 bg-blue-500"></span>
              <span className="font-semibold text-sm text-blue-400 tracking-wider uppercase">
                MY WORK
              </span>
            </div>

            {/* Main Headline - White text on dark bg */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white my-4 tracking-tight leading-tight">
              MY PORTFOLIO
            </h1>
            <p className="text-slate-400 text-lg mb-8">
              I build modern web applications and love to create music.
            </p>

            {/* Call to Action Button - Blue accent color */}
            <a
              href="#projects" // Point this to your projects section
              className="group inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              VIEW PROJECTS
              <ArrowRight />
            </a>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto">
          {/* Using a placeholder image here. 
            Replace 'src' with your own high-quality image.
            object-cover ensures the image fills the space without distortion.
          */}
          <img
            src="https://placehold.co/800x800/1e293b/ffffff?text=My+Projects"
            alt="Portfolio projects"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                'https://placehold.co/800x800/cccccc/969696?text=Image+Not+Found';
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

