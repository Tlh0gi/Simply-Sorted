import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-beige-light py-20 md:py-32">
        {/* Decorative diagonal lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute right-0 top-0 h-full w-1/2" viewBox="0 0 400 800" fill="none">
            <line x1="0" y1="0" x2="400" y2="400" stroke="black" strokeWidth="1" opacity="0.1" />
            <line x1="100" y1="0" x2="400" y2="300" stroke="black" strokeWidth="1" opacity="0.1" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
                Calm. Clear. Effortless.
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Professional organizing and home staging services in Randburg, Gauteng. 
                We help families, professionals, and homeowners transform their spaces into 
                calm, functional, and beautifully presented homes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/pricing"
                  className="bg-black text-white px-8 py-3 rounded text-center hover:bg-gray-800 transition-colors"
                >
                  View Services
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-black text-black px-8 py-3 rounded text-center hover:bg-black hover:text-white transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative h-96 bg-gray-300 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                [Hero Image Placeholder]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Welcome to Simply Sorted
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A boutique professional organizing and home staging business dedicated to 
              helping you create calm, functional, and beautifully presented spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-beige rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Organizing</h3>
              <p className="text-gray-600">
                Decluttering, organizing, and creating functional systems for your home.
              </p>
            </div>

            {/* Service 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Life Transitions</h3>
              <p className="text-gray-600">
                Compassionate support during downsizing and major life changes.
              </p>
            </div>

            {/* Service 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-beige rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Home Staging</h3>
              <p className="text-gray-600">
                Styling your home to maximize appeal and value for selling or renting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="relative h-96 bg-gray-300 rounded-lg order-2 md:order-1">
              <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                [Founder Image Placeholder]
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-black mb-4">Meet Funi</h2>
              <p className="text-lg text-gray-700 mb-4">
                Hi, I'm Funi – a Project Management Professional and certified professional 
                organizer (CPO). I am so happy you are here!
              </p>
              <p className="text-lg text-gray-700 mb-4">
                I run Simply Sorted, a local professional organizing service. I help families, 
                professionals and small businesses create calm, functional spaces with systems 
                that are easy to maintain.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                An organized home is more than just tidy shelves and labelled bins – it is about 
                creating calm, clarity, and breathing room in your life. My work is guided by 
                patience, discretion, and a genuine belief that calm spaces create room for what 
                matters most.
              </p>
              <Link 
                href="/about"
                className="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create a space that works for you. Book a consultation today.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-black px-8 py-3 rounded hover:bg-gray-200 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}