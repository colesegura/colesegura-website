import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Film', path: '/film' },
    { name: 'Books', path: '/books' },
    { name: 'Articles', path: '/articles' },
    { name: 'Backpacking', path: '/backpacking' },
  ];

  return (
    <nav className="w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="font-bold text-xl">
            Cole Segura
          </Link>
          
          {/* Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md bg-obsidian border border-gray-700 hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-48 bg-obsidian border border-gray-700 rounded-md shadow-lg py-1 mr-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="block px-4 py-2 text-sm hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
