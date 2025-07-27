import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export default function FilmPage() {
  const filmGear = [
    {
      name: 'iPhone 12 Pro Max',
      description: 'My primary camera for most video work',
      link: 'https://www.apple.com/shop/buy-iphone/iphone-12-pro',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'Moment M Series Case for iPhone 12',
      description: 'Protective case that allows for mounting specialized lenses',
      link: 'https://www.shopmoment.com/products/moment-case-for-iphone-12?variant=47464660992315',
      image: '/images/placeholder.jpg'
    },
    {
      name: '67mm Mobile Lens Filter Mount',
      description: 'Allows mounting of standard 67mm filters to smartphone',
      link: 'https://www.shopmoment.com/products/67mm-lens-filter-mount?variant=47464363393339',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'K&F Concept 67mm Variable ND2-32',
      description: 'Variable neutral density filter for controlling exposure in bright conditions',
      link: 'https://www.amazon.com/dp/B0CRRD773T',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'K&F Concept 67mm ND64 Lens Filter',
      description: 'Fixed neutral density filter for long exposure shots',
      link: 'https://www.amazon.com/dp/B0BC97K7W6',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'DJI Osmo Mobile 7P Gimbal',
      description: 'Smartphone gimbal for smooth, stabilized footage',
      link: 'https://www.amazon.com/dp/B07FTG84SW',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'Hollyland Lark A1 Wireless Microphone Set',
      description: 'Wireless microphone system for high-quality audio',
      link: 'https://www.amazon.com/dp/B0F3DF588W',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'Samsung T7 Shield 2TB',
      description: 'Rugged external SSD for storing footage in the field',
      link: 'https://www.amazon.com/dp/B09VLHR4JC',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'Apple Lightning to USB 3 Camera Adapter',
      description: 'For transferring photos and videos directly to external storage',
      link: 'https://www.amazon.com/dp/B01F7KJDIM',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'INIU 10,000 mAh 45W Power Bank (2x)',
      description: 'Portable power for extended shooting sessions',
      link: 'https://www.amazon.com/dp/B0CB1FW5FC',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'ULANZI MT-44 Extendable Phone Tripod, 59"',
      description: 'Versatile tripod for stable shots and unique angles',
      link: 'https://www.amazon.com/dp/B09T92NK4J',
      image: '/images/placeholder.jpg'
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-4 pt-20 md:p-24 md:pt-28 relative">
      <Navigation />
      
      {/* Aurora background effect */}
      <div className="aurora">
        <div className="aurora-wave"></div>
        <div className="aurora-wave"></div>
        <div className="aurora-wave"></div>
      </div>
      
      <div className="z-10 max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">My Film Gear</h1>
        
        <p className="mb-8 text-center">
          Here's the equipment I use to create my videos and photos. I believe in using gear that's versatile, 
          portable, and delivers professional results without being overly complicated.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filmGear.map((item, index) => (
            <div key={index} className="bg-obsidian p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-2">{item.name}</h3>
              <p className="text-gray-300 mb-4">{item.description}</p>
              <Link 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald hover:underline inline-block"
              >
                View Product →
              </Link>
            </div>
          ))}
        </div>
        
        {/* Projects section */}
        <div className="w-full mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
          <div className="bg-obsidian p-8 rounded-lg border border-gray-800 text-center">
            <h3 className="text-2xl font-medium mb-4">Coming Soon</h3>
            <p className="text-gray-300">
              I'm currently working on some exciting film projects. Check back soon to see my latest work!
            </p>
          </div>
        </div>
      </div>
      
      <footer className="w-full text-center mt-16 text-sm text-gray-400">
        © {new Date().getFullYear()} Cole Segura. All rights reserved.
      </footer>
    </main>
  );
}
