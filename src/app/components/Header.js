import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-60 h-16 overflow-hidden">
              <Image 
                src="/images/company-logo.jpeg" 
                alt="Simply Sorted Logo" 
                fill
                className="object-contain scale-[4.5]"
                priority
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black transition-colors">
              About
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-black transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-black transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link 
            href="/contact"
            className="hidden md:block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
          >
            Get Started
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}