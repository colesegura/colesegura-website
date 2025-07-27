import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export default function BackpackingPage() {
  const backpackingGear = [
    {
      name: 'Durston X-Mid 2P',
      description: 'Lightweight, spacious two-person trekking pole tent with excellent weather protection',
      link: 'https://durstongear.com/products/x-mid-2p',
      image: '/images/placeholder.jpg' // You can add actual product images later
    },
    {
      name: 'Hammock Gear Burrow Quilt',
      description: 'Ultralight down quilt that provides excellent warmth-to-weight ratio',
      link: 'https://hammockgear.com/burrow-econ/',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'Osprey Exos Pro 58',
      description: 'Lightweight backpack with excellent load carrying capacity and comfort',
      link: 'https://www.osprey.com/us/en/product/exos-pro-58-EXOSPRO58.html',
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
        <h1 className="text-4xl font-bold mb-8 text-center">Backpacking Gear</h1>
        
        <p className="mb-8 text-center">
          I love exploring the outdoors with minimal but reliable gear. Here's the equipment I use for my backpacking adventures.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {backpackingGear.map((item, index) => (
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
        
        <div className="bg-obsidian p-6 rounded-lg border border-gray-800 mb-12">
          <h2 className="text-2xl font-semibold mb-4">My Backpacking Philosophy</h2>
          <p className="mb-4">
            I believe in carrying only what I need and finding gear that serves multiple purposes. 
            My approach to backpacking focuses on lightweight but durable equipment that allows me to 
            enjoy nature without being weighed down.
          </p>
          <p>
            The gear I've selected represents my personal preferences after many miles on the trail. 
            I'm always testing and refining my setup to find the perfect balance between comfort, weight, and functionality.
          </p>
        </div>
      </div>
      
      <footer className="w-full text-center mt-16 text-sm text-gray-400">
        © {new Date().getFullYear()} Cole Segura. All rights reserved.
      </footer>
    </main>
  );
}
