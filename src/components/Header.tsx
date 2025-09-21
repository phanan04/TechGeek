"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FiChevronRight,
  FiHeart,
  FiMenu,
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiX,
} from "react-icons/fi";

import { menuData } from "@/data/menuData";

import SearchOverlay from "@/components/SearchOverlay";

const Header = () => {
  //Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-nike-white shadow-sm relative z-50 transition-all duration-300 ease-in-out">
        {/* Top bar */}
        <div className="hidden lg:block bg-gray-100">
          <div className="px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between h-9 text-xs">
              {/* Logo */}
              <div></div>

              {/* Right - Utility links */}
              <div className="flex items-center space-x-4">
                <Link
                  href="/store-locator"
                  className="text-gray-600 hover:text-black"
                >
                  Find a Store
                </Link>
                <span className="text-gray-400">|</span>
                <Link href="/help" className="text-gray-600 hover:text-black">
                  Help
                </Link>
                <span className="text-gray-400">|</span>
                <Link href="/login" className="text-gray-600 hover:text-black">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*Main header*/}
        <div className="px-4 md:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between lg:justify-start h-14">
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
            {/* Nav */}
            <div className="hidden lg:flex flex-1 justify-center transition-all duration-300">
              <nav className="flex transition-opacity duration-200">
                <ul className="flex space-x-4">
                  <li
                    className="group"
                    onMouseEnter={() => setActiveDropdown("New & Featured")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href="/new-featured"
                      className="text-black hover:text-gray-600 font-medium py-5 px-2"
                    >
                      New & Featured
                    </Link>

                    {/* Mega Dropdown */}
                    {activeDropdown === "New & Featured" && (
                      <div
                        className="absolute top-full left-0 right-0 bg-white w-screen shadow-lg z-50 border-t"
                        onMouseEnter={() => setActiveDropdown("New & Featured")}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="max-w-7xl mx-auto px-8 py-8">
                          <div className="grid grid-cols-3 gap-6">
                            {/* Column 1 */}
                            <div>
                              <h3 className="font-semibold text-black mb-4">
                                Shoes
                              </h3>
                              <ul className="space-y-2">
                                <li>
                                  <Link
                                    href="/men/shoes/all"
                                    className="text-gray-600 hover:text-black"
                                  >
                                    All Shoes
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/men/shoes/running"
                                    className="text-gray-600 hover:text-black"
                                  >
                                    Running
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/men/shoes/basketball"
                                    className="text-gray-600 hover:text-black"
                                  >
                                    Basketball
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                  <li
                    className="group"
                    onMouseEnter={() => setActiveDropdown("men")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href="/men"
                      className="text-black hover:text-gray-600 font-medium py-5 px-2"
                    >
                      Men
                    </Link>

                    {/* Mega Dropdown */}
                    {activeDropdown === "men" && (
                      <div
                        className="absolute top-full left-0 right-0 bg-white w-screen shadow-lg z-50 border-t"
                        onMouseEnter={() => setActiveDropdown("men")}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="max-w-7xl mx-auto px-8 py-8">
                          <div className="grid grid-cols-3 gap-6">
                            {/* Column 1 */}
                            <div>
                              <h3 className="font-semibold text-black mb-4">
                                Shoes
                              </h3>
                              <ul className="space-y-2">
                                <li>
                                  <Link
                                    href="/men/shoes/all"
                                    className="text-gray-600 hover:text-black"
                                  >
                                    All Shoes
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/men/shoes/running"
                                    className="text-gray-600 hover:text-black"
                                  >
                                    Running
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/men/shoes/basketball"
                                    className="text-gray-600 hover:text-black"
                                  >
                                    Basketball
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                  <li>
                    <Link
                      href="/women"
                      className="text-black hover:text-gray-600 py-2 px-2"
                    >
                      Women
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/kids"
                      className="text-black hover:text-gray-600 py-2 px-2"
                    >
                      Kids
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sale"
                      className="text-black hover:text-gray-600 py-2 px-2"
                    >
                      Sale
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Action */}
            <div className="flex items-center space-x-2 lg:w-60 lg:justify-end">
              <button
                className="lg:hidden p-2"
                onClick={() => setIsSearchOpen(true)}
              >
                <FiSearch className="h-5 w-5 text-gray-700" />
              </button>
              {/* Computer */}
              <div
                className="hidden lg:flex items-center bg-gray-200 rounded-full px-4 py-2 w-40 transition-all duration-300 relative cursor-pointer"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <FiSearch className="h-4 w-4 text-gray-800 mr-2" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none outline-none text-sm w-full text-gray-600 placeholder-gray-800"
                />
              </div>
              <Link href="" className="md:hidden p-2">
                <FiUser className="h-5 w-5 text-gray-700" />
              </Link>
              <Link href="" className="hidden md:block p-2">
                <FiHeart className="h-5 w-5 text-gray-700" />
              </Link>
              <Link href="" className="p-2">
                <FiShoppingBag className="h-5 w-5 text-gray-700" />
              </Link>
              <button onClick={toggleMobileMenu} className="lg:hidden p-2">
                <FiMenu className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-25 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu panel  */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-xl">
            <div className="px-6 py-4 h-full overflow-y-auto">
              {/* Close button */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <FiX className="h-6 w-6 text-gray-700" />
                </button>
              </div>
              {/* User Section */}
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center">
                  <FiUser className="h-6 w-6 mr-3 text-gray-700" />
                  <span className="text-lg font-medium text-gray-900">
                    Hi, Guest
                  </span>
                </div>
                <FiChevronRight className="h-5 w-5 text-gray-800" />
              </div>

              {/* Main Navigation - Loop qua menuData */}
              <nav className="py-4 space-y-1">
                {menuData.mainMenu.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="flex items-center justify-between py-3 text-lg font-medium text-gray-900 hover:text-gray-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{item.title}</span>
                    {item.hasSubMenu && (
                      <FiChevronRight className="h-5 w-5 text-gray-800" />
                    )}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};
export default Header;
