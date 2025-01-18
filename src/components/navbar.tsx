'use client'
import Link from 'next/link';
import { FC, useState } from 'react';
import { ModeToggle } from './toggle-theme';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-200 dark:bg-gray-900 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-gray-900 dark:text-gray-100 text-2xl font-bold">
          Tambola Game
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="#about"
            className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="#leaderboard"
            className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Leaderboard
          </Link>
          <Link
            href="#rooms"
            className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Rooms
          </Link>
          <Link
            href="#contact"
            className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Contact
          </Link>
          <ModeToggle />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <ModeToggle />
          <button
            className="text-gray-900 dark:text-gray-100 focus:outline-none ml-4"
            aria-label="Open Menu"
            onClick={toggleMenu}
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

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="md:hidden bg-gray-200 dark:bg-gray-900 px-4 py-3 space-y-2">
          <Link
            href="#about"
            className="block text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="#leaderboard"
            className="block text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Leaderboard
          </Link>
          <Link
            href="#rooms"
            className="block text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Rooms
          </Link>
          <Link
            href="#contact"
            className="block text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
