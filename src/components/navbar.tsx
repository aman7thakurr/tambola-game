import Link from 'next/link';
import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className="bg-blue-300 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold">
          Tambola Game
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="#about"
            className="text-white hover:text-blue-200 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="#leaderboard"
            className="text-white hover:text-blue-200 transition-colors duration-300"
          >
            Leaderboard
          </Link>
          <Link
            href="#rooms"
            className="text-white hover:text-blue-200 transition-colors duration-300"
          >
            Rooms
          </Link>
          <Link
            href="#contact"
            className="text-white hover:text-blue-200 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
