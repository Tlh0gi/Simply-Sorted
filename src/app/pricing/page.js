import Link from 'next/link';
import Image from 'next/image';

export default function Pricing() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-beige-light py-16 md:py-24">
        {/* Decorative diagonal lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute right-0 top-0 h-full w-1/2" viewBox="0 0 400 800" fill="none">
            <line x1="0" y1="0" x2="400" y2="400" stroke="black" strokeWidth="1" opacity="0.1" />
            <line x1="100" y1="0" x2="400" y2="300" stroke="black" strokeWidth="1" opacity="0.1" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Professional organizing and home staging solutions tailored to your needs. 
              From single-room organization to complete home transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Organizing Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Professional Organizing Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the package that best suits your organizing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Simply Start Card */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-xl hover:border-beige-dark transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">Simply Start</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-black">R1,950</span>
                  <span className="text-gray-500 ml-2">from</span>
                </div>
                <p className="text-gray-600 italic">A gentle introduction to a calmer, more functional home.</p>
              </div>

              {/* Image Placeholder */}
              <div className="relative h-48 bg-gray-200 rounded-lg mb-6">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                  <Image
                        src="/images/outdoor2.png"
                        alt="Professional organizing services"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">3–4 hour session</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">One focused space (closet, kitchen, bedroom, home office)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Hands-on decluttering support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Simple, easy-to-maintain organizing systems</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Light styling and space reset</span>
                </li>
              </ul>

              <Link 
                href="/contact"
                className="block w-full bg-black text-white text-center px-6 py-3 rounded hover:bg-gray-800 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Signature Sort Card - Featured */}
            <div className="bg-beige border-2 border-beige-dark rounded-lg p-8 hover:shadow-xl transition-all duration-300 relative">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">Signature Sort</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-black">R4,500</span>
                  <span className="text-gray-700 ml-2">from</span>
                </div>
                <p className="text-gray-700 italic">A complete transformation designed to last.</p>
              </div>

              {/* Image Placeholder */}
              <div className="relative h-48 bg-gray-300 rounded-lg mb-6">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm">
                  <Image
                        src="/images/outdoor1.png"
                        alt="Professional organizing services"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                  </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Full day session (7–8 hours)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Multiple spaces addressed in one visit</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Custom organizing systems</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Storage recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Styling for everyday living</span>
                </li>
              </ul>

              <Link 
                href="/contact"
                className="block w-full bg-black text-white text-center px-6 py-3 rounded hover:bg-gray-800 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Complete Calm Card */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-xl hover:border-blue-dark transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">Complete Calm</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-black">R8,500</span>
                  <span className="text-gray-500 ml-2">from</span>
                </div>
                <p className="text-gray-600 italic">Long term calm, clarity, and ease.</p>
              </div>

              {/* Image Placeholder */}
              <div className="relative h-48 bg-gray-200 rounded-lg mb-6">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                  <Image
                        src="/images/outdoor3.png"
                        alt="Professional organizing services"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">2–3 full days of organizing support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Whole-home decluttering & flow planning</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Personalized systems for each space</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Optional family involvement</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Final styling and walkthrough</span>
                </li>
              </ul>

              <Link 
                href="/contact"
                className="block w-full bg-black text-white text-center px-6 py-3 rounded hover:bg-gray-800 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Downsizing & Life Transition */}
      <section className="py-20 bg-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Downsizing & Life Transition Support
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Compassionate support during major life changes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Gentle Transition Card */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-xl hover:border-blue-dark transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">Gentle Transition</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-black">R4,000</span>
                  <span className="text-gray-500 ml-2">per day</span>
                </div>
                <p className="text-gray-600 italic">Downsizing with dignity and care.</p>
              </div>

              {/* Image Placeholder */}
              <div className="relative h-48 bg-gray-200 rounded-lg mb-6">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                  <Image
                        src="/images/outdoor4.png"
                        alt="Professional organizing services"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Compassionate support during life changes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Unhurried, respectful downsizing assistance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Decision-making guidance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Sorting and categorizing belongings</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Space planning for new home</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Optional daily coordination</span>
                </li>
              </ul>

              <Link 
                href="/contact"
                className="block w-full bg-black text-white text-center px-6 py-3 rounded hover:bg-gray-800 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Supported Move Card */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-xl hover:border-blue-dark transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">Supported Move</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-black">R9,500</span>
                  <span className="text-gray-500 ml-2">from</span>
                </div>
                <p className="text-gray-600 italic">A thoughtful, hands-on approach to life's next chapter.</p>
              </div>

              {/* Image Placeholder */}
              <div className="relative h-48 bg-gray-200 rounded-lg mb-6">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                  <Image
                        src="/images/outdoor5.png"
                        alt="professional packaging"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Ideal for major transitions or relocations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Multi-day downsizing support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Decluttering and packing guidance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Layout planning for your new space</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Optional unpacking and setup</span>
                </li>
            </ul>
            <Link 
            href="/contact"
            className="block w-full bg-black text-white text-center px-6 py-3 rounded hover:bg-gray-800 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  </section>

  {/* Home Staging Services */}
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Home Staging Services
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Professional staging to maximize your home's appeal
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Market Ready Card */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-xl hover:border-beige-dark transition-all duration-300">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-black mb-2">Market Ready</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-bold text-black">R4,500</span>
              <span className="text-gray-500 ml-2">from</span>
            </div>
            <p className="text-gray-600 italic">Perfect for selling or renting your home.</p>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-48 bg-gray-200 rounded-lg mb-6">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
              <Image
                        src="/images/packaging4.png"
                        alt="Professional organizing services"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
            </div>
          </div>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Walk-through consultation</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Decluttering and furniture placement</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Styling using existing items</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Buyer-focused presentation</span>
            </li>
          </ul>

          <Link 
            href="/contact"
            className="block w-full bg-black text-white text-center px-6 py-3 rounded hover:bg-gray-800 transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Show Home Look Card */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-xl hover:border-beige-dark transition-all duration-300">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-black mb-2">Show Home Look</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-bold text-black">R9,000</span>
              <span className="text-gray-500 ml-2">from</span>
            </div>
            <p className="text-gray-600 italic">Created to attract buyers and maximize perceived value.</p>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-48 bg-gray-200 rounded-lg mb-6">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
              <Image
                        src="/images/packaging2.png"
                        alt="Professional organizing services"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
            </div>
          </div>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Designed for competitive property listings</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Full staging plan</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Visual flow and styling optimization</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Light décor sourcing (rental or owned items)</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Photo-ready presentation</span>
            </li>
          </ul>

          <Link 
            href="/contact"
            className="block w-full bg-black text-white text-center px-6 py-3 rounded hover:bg-gray-800 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  </section>

  {/* Add-On Services */}
  <section className="py-20 bg-beige-light">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Add-On Services
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Enhance your package with additional support
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-black mb-2">Hourly Organizing</h3>
          <p className="text-2xl font-bold text-black mb-3">R550 <span className="text-base font-normal text-gray-600">per hour</span></p>
          <p className="text-gray-600">Flexible hourly support for ongoing maintenance or smaller projects.</p>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-black mb-2">Maintenance Sessions</h3>
          <p className="text-2xl font-bold text-black mb-3">R1,500 <span className="text-base font-normal text-gray-600">for 3 hours</span></p>
          <p className="text-gray-600">Keep your organized spaces functioning perfectly with regular tune-ups.</p>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-black mb-2">Storage Product Sourcing</h3>
          <p className="text-2xl font-bold text-black mb-3">From R750 <span className="text-base font-normal text-gray-600">(excluding items)</span></p>
          <p className="text-gray-600">Expert selection and sourcing of storage solutions tailored to your needs.</p>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-black mb-2">Travel Outside Randburg</h3>
          <p className="text-2xl font-bold text-black mb-3">Quoted Separately</p>
          <p className="text-gray-600">We're happy to travel to surrounding areas. Contact us for a custom quote.</p>
        </div>
      </div>
    </div>
  </section>

  {/* What to Expect */}
  <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          What to Expect
        </h2>
      </div>

      <div className="bg-blue-light rounded-lg p-8 md:p-12">
        <ul className="space-y-4">
          <li className="flex items-start">
            <svg className="w-6 h-6 text-black mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-lg text-gray-700">Packages are tailored after consultation to ensure the best fit for your needs</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-black mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-lg text-gray-700">Storage products are quoted separately based on your specific requirements</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-black mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-lg text-gray-700">Discounts available for multi-day bookings</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-black mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-lg text-gray-700">Estate agent and repeat-client rates available</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-20 bg-black text-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
      <p className="text-xl text-gray-300 mb-8">
        Let's discuss which package is right for you. Book your free consultation today.
      </p>
      <Link 
        href="/contact"
        className="inline-block bg-white text-black px-8 py-3 rounded hover:bg-gray-200 transition-colors text-lg font-semibold"
      >
        Get Your Free Consultation
      </Link>
    </div>
  </section>
</div>
  )};