import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex items-baseline justify-between">
        <nav className="flex space-x-6">
          <div className="group relative">
            <span className="cursor-pointer">United Kingdom</span>
            <div className="hidden group-hover:block absolute bg-gray-700 p-4 w-48">
              {/* Flyout Menu 1 content */}
              <Link href="/garden-webshops-united-kingdom">
                <a className="block text-white hover:bg-gray-600 transition duration-300">Garden Webshops United Kingdom</a>
              </Link>
              <Link href="/garden-centres-united-kingdom">
                <a className="block text-white hover:bg-gray-600 transition duration-300">Garden Centres United Kingdom</a>
              </Link>
              <Link href="/garden-webshops-ireland">
                <a className="block text-white hover:bg-gray-600 transition duration-300">Garden Webshops Ireland</a>
              </Link>
            </div>
          </div>
          <div className="group relative">
            <span className="cursor-pointer">Belgie | Nederland</span>
            <div className="hidden group-hover:block absolute bg-gray-700 p-2 w-48">
              {/* Flyout Menu 2 content */}
              <Link href="/tuincentrum-leveranciers">
                <a className="block text-white hover:bg-gray-600 transition duration-300">Tuincentrum Leveranciers</a>
              </Link>
              <Link href="/tuinblogs-nederlands">
                <a className="block text-white hover:bg-gray-600 transition duration-300">Tuin Blogs Nederlands</a>
              </Link>
              <Link href="/tuin-blogs-engels">
                <a className="block text-white hover:bg-gray-600 transition duration-300">Tuin Blogs Engels</a>
              </Link>
              <Link href="/webshops-nederland-en-belgie">
                <a className="block text-white hover:bg-gray-600 transition duration-300">Webshops Nederland en Belgie</a>
              </Link>
              <Link href="/tuincentra-nederland-en-belgie">
                <a className="block text-white hover:bg-gray-600 transition duration-300">Tuincentra Nederland en Belgie</a>
              </Link>
              <Link href="/dierenwinkel">
                <a className="block text-white hover:bg-gray-600 transition duration-300">Dierenwinkels</a>
              </Link>
              <Link href="/divers">
                <a className="block text-white hover:bg-gray-600 transition duration-300">Divers</a>
              </Link>
            </div>
          </div>
          <div className="group relative">
            <span className="cursor-pointer">Others</span>
            <div className="hidden group-hover:block absolute bg-gray-700 p-2 w-48">
              {/* Flyout Menu 3 content */}
              <Link href="/garden-centres-canada">
                <a className="block text-white hover:bg-gray-600 transition duration-300">Garden Centres Canada</a>
              </Link>
            </div>
          </div>
          {/* Add more menu items as needed */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
