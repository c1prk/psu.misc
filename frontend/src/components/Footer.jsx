import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder social media icons.
// In your real app, you might import these from 'react-icons' or from your assets.js
const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-violet-500 transition-colors"
  >
    {children}
  </a>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.6c1.55-.17 3.17-.76 3.17-3.5a2.6 2.6 0 0 0-.7-1.84 2.65 2.65 0 0 0 .1-1.85c0-.62-.22-1.22-.67-1.67C15.11 5 12.8 5 11 5S6.89 5 6.53 6.33c-.45.45-.67 1.05-.67 1.67 0 .6.09 1.25.1 1.85a2.6 2.6 0 0 0-.7 1.84c0 2.74 1.62 3.33 3.17 3.5a3.37 3.37 0 0 0-.94 2.6V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Footer = () => {
  return (
    <footer className="mt-20 py-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-white border-t border-violet-100 shadow-sm">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1: Logo & Description */}
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="text-3xl font-bold text-gray-800 tracking-wider"
            >
              LOGO
            </Link>
            <p className="text-gray-500 text-sm max-w-xs">
              My personal portfolio and music tab collection. Built with React &
              Tailwind.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Quick Links
            </h3>
            <Link
              to="/"
              className="text-gray-600 hover:text-violet-500 transition-colors text-sm"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-600 hover:text-violet-500 transition-colors text-sm"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-violet-500 transition-colors text-sm"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-violet-500 transition-colors text-sm"
            >
              Contact
            </Link>
          </div>

          {/* Section 3: Socials */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Follow</h3>
            <div className="flex gap-5">
              <SocialIcon href="https://twitter.com">
                <TwitterIcon />
              </SocialIcon>
              <SocialIcon href="https://github.com">
                <GithubIcon />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com">
                <LinkedinIcon />
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-10 pt-6 border-t border-violet-100 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;