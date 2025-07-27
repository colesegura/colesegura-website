import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export default function BackpackingPage() {
  const backpackingGear = [
    {
      name: 'Durston X-Mid 2P',
      description: 'Lightweight, spacious two-person trekking pole tent with excellent weather protection',
      weight: '2 lb 4 oz (1020 g)',
      link: 'https://durstongear.com/products/x-mid-2p',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'Hammock Gear Burrow Quilt',
      description: 'Ultralight down quilt that provides excellent warmth-to-weight ratio',
      weight: '1 lb 6 oz (624 g)',
      link: 'https://hammockgear.com/burrow/',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'Osprey Exos Pro 55',
      description: 'Lightweight backpack with excellent load carrying capacity and comfort',
      weight: '2 lb 8 oz (1134 g)',
      link: 'https://www.osprey.com/exos-pro-55-exospro55s23-482?size=S%2FM&color=Dale+Grey%2FAgam+Blue',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'NeoAir Xlite NXT Sleeping Pad',
      description: 'Ultralight inflatable sleeping pad with excellent insulation',
      weight: '12.5 oz (354 g)',
      link: 'https://zpacks.com/products/neoair-xlite-nxt-sleeping-pad',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'Zpacks Front Utility Pack Accessory',
      description: 'Convenient front pack for quick access to essentials',
      weight: '2.5 oz (71 g)',
      link: 'https://zpacks.com/products/front-utility-pack-accessory',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'Fizan Trekking Poles',
      description: 'Ultralight and durable aluminum trekking poles',
      weight: '11.4 oz (323 g) per pair',
      link: 'https://www.amazon.com/dp/B0DZFKXQ9V',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'Mountain Mike Hiking Gear Water Bottle and Snack Holder',
      description: 'Convenient shoulder strap attachment for water and snacks',
      weight: '1.6 oz (45 g)',
      link: 'https://www.amazon.com/dp/B09HCZZSR8',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'Nitecore Headlamp',
      description: 'Ultralight rechargeable headlamp with multiple brightness modes',
      weight: '1.7 oz (48 g)',
      link: 'https://www.amazon.com/Nitecore-NU20-Classic-Rechargeable-Lightweight/dp/B0DCQDXSS5/',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'iPhone 12 Pro Max',
      description: 'For navigation, photos, and communication',
      weight: '8.0 oz (228 g)',
      link: 'https://www.apple.com/shop/buy-iphone/iphone-12-pro',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'INIU 10,000 mAh 45W Power Bank',
      description: 'Lightweight portable power for extended trips',
      weight: '6.9 oz (196 g)',
      link: 'https://www.amazon.com/dp/B0CB1FW5FC',
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
              <p className="text-gray-300 mb-2">{item.description}</p>
              <p className="text-emerald mb-4 text-sm font-medium">Weight: {item.weight}</p>
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
