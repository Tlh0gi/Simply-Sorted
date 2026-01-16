import Link from 'next/link';
import Image from 'next/image';

export default function About() {
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
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              About Simply Sorted
            </h1>
            <p className="text-xl text-gray-700">
              Creating calm, functional, and beautifully presented spaces for families, 
              professionals, and homeowners in Randburg, Gauteng.
            </p>
          </div>
        </div>
      </section>

      {/* Business Profile Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-black mb-8 text-center">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Simply Sorted is a boutique professional organizing and home staging business based 
              in Randburg, Gauteng, helping families, professionals, and homeowners transform their 
              spaces into calm, functional, and beautifully presented homes.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We specialize in decluttering, organizing, and styling spaces that support everyday 
              living while enhancing the visual appeal and value of your home. Whether you are 
              feeling overwhelmed by clutter, preparing to sell, or simply craving a more 
              intentional living environment, Simply Sorted offers thoughtful, tailored solutions 
              that make your space work for you.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our approach blends practical systems with refined aesthetics – creating homes that 
              are easy to maintain, visually balanced, and inviting. Every project is handled with 
              discretion, care, and attention to detail, ensuring a seamless and stress-free 
              experience from start to finish.
            </p>
            <p className="text-lg text-gray-700 font-medium italic">
              At Simply Sorted, we believe that an organized and well-staged home isn't just about 
              how it looks – it's about how it feels. Calm. Clear. Effortless.
            </p>
          </div>
        </div>
      </section>

        {/* Transforming Lives Through Organization */}
      <section className="py-20 bg-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">
              Real Spaces, Real Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From life transitions to everyday organizing, we're here for every step of your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Image 1  */}
            <div className="group">
              <div className="relative h-72 rounded-lg overflow-hidden shadow-md mb-4">
                <Image
                  src="/images/packaging1.png"
                  alt="Professional organizing services"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Image 2  */}
            <div className="group">
              <div className="relative h-72 rounded-lg overflow-hidden shadow-md mb-4">
                <Image
                  src="/images/packaging5.png"
                  alt="Life transitions and downsizing support"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          {/* Image 3  */}
            <div className="group">
              <div className="relative h-72 rounded-lg overflow-hidden shadow-md mb-4">
                <Image
                  src="/images/packaging6.png"
                  alt="Home staging services"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating organized, functional, and beautifully styled spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Service List */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Our Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-700">Professional home organizing and decluttering</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-700">Downsizing and life transition support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-700">Home staging for selling or renting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-700">Styling for lived-in homes</span>
                </li>
              </ul>

              <p className="text-lg text-gray-700 italic mt-8">
                Our work blends practical systems with refined aesthetics, ensuring your space is 
                not only beautiful, but easy to maintain and tailored to your lifestyle.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/indoor-service.jpeg"
                alt="Professional organizing services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <Image
                src="/images/outdoor-service.jpeg"
                alt="Our approach to organizing"
                fill
                className="object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-black mb-6">Our Approach</h2>
              <p className="text-lg text-gray-700 mb-6">
                Every home – and every client – is different. That's why we take a personalized, 
                judgment-free approach to every project.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We listen first, work at your pace, and create systems that feel natural and 
                sustainable. Whether you are feeling overwhelmed by clutter, navigating a life 
                transition, or preparing your home for the market, we guide the process with care, 
                discretion, and attention to detail.
              </p>
              <p className="text-lg text-gray-700 font-medium">
                Our goal is simple: to create spaces that support your life, not complicate it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Simply Sorted Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-black mb-12 text-center">Why Simply Sorted</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-beige-light rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Warm, respectful, and confidential service</h3>
                <p className="text-gray-700">
                  Your space is personal. We handle every project with discretion and care.
                </p>
              </div>
              <div className="p-6 bg-blue-light rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Functional systems designed for real life</h3>
                <p className="text-gray-700">
                  We create organizing solutions that actually work for how you live.
                </p>
              </div>
              <div className="p-6 bg-blue-light rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">A calm, structured process from start to finish</h3>
                <p className="text-gray-700">
                  No overwhelm, no judgment – just clear steps and steady support.
                </p>
              </div>
              <div className="p-6 bg-beige-light rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Local, reliable support in Randburg and surrounding areas</h3>
                <p className="text-gray-700">
                  Based locally and committed to serving our community with excellence.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-700 text-center mt-12 italic">
              We believe organization is not about perfection – it's about creating space for what 
              matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Ready to Begin Section */}
      <section className="py-20 bg-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-black mb-8 text-center">Ready to Begin?</h2>
            <p className="text-xl text-gray-700 text-center mb-12">
              If you answered yes to any of these questions, it's time for us to talk!
            </p>
            <div className="space-y-4 mb-12">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-black mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-lg text-gray-700">
                  Are you tired of digging through a pile of clothes looking for one item?
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-black mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-lg text-gray-700">
                  Do you often duplicate purchases because you don't know what you have already due to clutter?
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-black mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-lg text-gray-700">
                  Have you lost track of all the shoes you own?
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-black mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-lg text-gray-700">
                  Do you often ignore your spices/condiments expiry date?
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-700 text-center mb-8">
              Simply Sorted is here to help you get your home in order and have it function to your 
              everyday lifestyle.
            </p>
            <div className="text-center">
              <Link 
                href="/pricing"
                className="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors mr-4"
              >
                View Our Services
              </Link>
              <Link 
                href="/contact"
                className="inline-block border-2 border-black text-black px-8 py-3 rounded hover:bg-black hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Create Your Perfect Space</h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to transform your home into a calm, organized sanctuary? We're here to help.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-black px-8 py-3 rounded hover:bg-gray-200 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}