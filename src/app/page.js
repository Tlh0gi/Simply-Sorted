import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
<section className="relative py-20 md:py-32 min-h-[600px] flex items-center">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/heropage_bg.jpeg"
      alt="Beautiful organized home"
      fill
      className="object-cover"
      priority
    />
    {/* Dark overlay so text stays readable */}
    <div className="absolute inset-0 bg-black/50" />
  </div>

  {/* Decorative diagonal lines - kept, now white */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
    <svg className="absolute right-0 top-0 h-full w-1/2" viewBox="0 0 400 800" fill="none">
      <line x1="0" y1="0" x2="400" y2="400" stroke="white" strokeWidth="1" opacity="0.15" />
      <line x1="100" y1="0" x2="400" y2="300" stroke="white" strokeWidth="1" opacity="0.15" />
    </svg>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
    <div className="max-w-xl">
      {/* Text Content - left aligned, no grid needed */}
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Calm. Clear. Effortless.
      </h1>
      <p className="text-xl text-gray-200 mb-8">
        Professional organizing and home staging services in Randburg, Gauteng. 
        We help families, professionals, and homeowners transform their spaces into 
        calm, functional, and beautifully presented homes.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/pricing"
          className="bg-white text-black px-8 py-3 rounded text-center hover:bg-gray-200 transition-colors"
        >
          View Services
        </Link>
        <Link 
          href="/contact"
          className="border-2 border-white text-white px-8 py-3 rounded text-center hover:bg-white hover:text-black transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Welcome to Orderly Bliss
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A boutique professional organizing and home staging business dedicated to 
              helping you create calm, functional, and beautifully presented spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Service 1 - Professional Organizing */}
            <div className="text-center p-6 group">
            <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/homepage/professional-organizing.jpeg"
              alt="Professional organizing services"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>


              <h3 className="text-xl font-bold mb-2">Professional Organizing</h3>
              <p className="text-gray-600">
                Decluttering, organizing, and creating functional systems for your home.
              </p>
            </div>

            {/* Service 2 - Life Transitions */}
            <div className="text-center p-6 group">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/homepage/life_transition.jpg"
                  alt="Life transitions and downsizing support"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Life Transitions</h3>
              <p className="text-gray-600">
                Compassionate support during downsizing and major life changes.
              </p>
            </div>

            {/* Service 3 - Home Staging */}
            <div className="text-center p-6 group">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/homepage/home_staging.jpeg"
                  alt="Home staging services"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
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
            {/* Funi's Image */}
            <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
            <Image
              src="/images/owner_image.jpeg"
              alt="Funi - Founder of Simply Sorted"
              width={800}
              height={600}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
            {/* Text Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-black mb-4">Meet Funeka</h2>
              <p className="text-lg text-gray-700 mb-4">
                Hi, I'm Funi – a Project Management Professional and certified professional 
                organizer (CPO). I am so happy you are here!
              </p>
              <p className="text-lg text-gray-700 mb-4">
                I run Orderly Bliss, a local professional organizing service. I help families, 
                professionals and small businesses create calm, functional spaces with systems 
                that are easy to maintain.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                An organized home is more than just tidy shelves and labelled bins – it is about 
                creating calm, clarity, and breathing room in your life. My work is guided by 
                patience, discretion, and a genuine belief that calm spaces create room for what 
                matters most.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Based in Randburg, Gauteng (and always up for travel), I offer refined home and 
                office organization for clients who value calm, efficient, and well-considered 
                spaces.
              </p>
              
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