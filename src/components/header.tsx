'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <svg className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900">Solar<span className="text-green-600">Tech</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">
              Beranda
            </Link>
            <Link href="#about" className="text-gray-500 hover:text-green-600 px-3 py-2 text-sm font-medium">
              Tentang
            </Link>
            <Link href="#services" className="text-gray-500 hover:text-green-600 px-3 py-2 text-sm font-medium">
              Layanan
            </Link>
            <Link href="#projects" className="text-gray-500 hover:text-green-600 px-3 py-2 text-sm font-medium">
              Proyek
            </Link>
            <Link href="#contact" className="text-gray-500 hover:text-green-600 px-3 py-2 text-sm font-medium">
              Kontak
            </Link>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Link 
              href="#contact" 
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
            >
              Konsultasi Gratis
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="pt-2 pb-3 space-y-1 px-4">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-green-600 hover:bg-green-50"
              onClick={toggleMenu}
            >
              Beranda
            </Link>
            <Link 
              href="#about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-green-600 hover:bg-green-50"
              onClick={toggleMenu}
            >
              Tentang
            </Link>
            <Link 
              href="#services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-green-600 hover:bg-green-50"
              onClick={toggleMenu}
            >
              Layanan
            </Link>
            <Link 
              href="#projects" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-green-600 hover:bg-green-50"
              onClick={toggleMenu}
            >
              Proyek
            </Link>
            <Link 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-green-600 hover:bg-green-50"
              onClick={toggleMenu}
            >
              Kontak
            </Link>
            <div className="mt-4">
              <Link 
                href="#contact" 
                className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
                onClick={toggleMenu}
              >
                Konsultasi Gratis
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}