"use client";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Mobile - Fullscreen overlay */}
      <div className="lg:hidden fixed inset-0 bg-white z-50">
        <div className="flex items-center p-4">
          <div className="flex items-center rounded-full bg-gray-200 px-4 py-2 flex-1">
            <FiSearch className="h-5 w-5 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 text-lg outline-none text-black bg-gray-200"
              autoFocus
            />
          </div>
          <button
            onClick={onClose}
            className="ml-4 text-gray-600 hover:text-black"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Desktop - Dropdown under header */}
      <div className="hidden lg:block absolute top-0 left-0 right-0 bg-opacity-95 bg-white z-50">
        <div className="flex items-center mx-auto px-12 py-10 justify-between">
          {/* Logo */}
          <div className="lg:w-60">
            <Link href="/" className="flex items-start">
              <svg
                className="h-8 w-8 text-black"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.456 0-2.635-.616-3.537-1.849C-.37 13.667-.017 12.9.353 12.134c.123-.263.247-.494.432-.679.185-.185.432-.309.679-.432l.247-.123c.494-.247 1.049-.371 1.666-.371 1.235 0 2.635.432 4.198 1.296L24 7.8z" />
              </svg>
            </Link>
          </div>
          {/* Search Input */}
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 flex-1 max-w-[1200px] mx-8">
            <FiSearch className="h-5 w-5 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 text-base outline-none bg-gray-100 text-black"
              autoFocus
            />
          </div>
          <button
            onClick={onClose}
            className="ml-4 text-gray-600 hover:text-black"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchOverlay;
