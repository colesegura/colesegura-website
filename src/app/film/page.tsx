import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export default function FilmPage() {
  const filmGear = [
    {
      name: 'iPhone 12 Pro Max',
      description: 'My primary camera for most video work',
      link: 'https://www.apple.com/shop/buy-iphone/iphone-12-pro',
      image: '/images/placeholder.jpg' // You can add actual product images later
    },
    {
      name: 'Moment M Series Case',
      description: 'Protective case that allows for mounting specialized lenses',
      link: 'https://www.shopmoment.com/products/moment-case-iphone',
      image: '/images/placeholder.jpg'
    },
    {
      name: '67mm Adapter',
      description: 'Allows mounting of standard 67mm filters to smartphone',
      link: 'https://www.shopmoment.com/products/67mm-filter-mount',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'ND Filter',
      description: 'Neutral density filter for controlling exposure in bright conditions',
      link: 'https://www.shopmoment.com/products/variable-nd-filters',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'Lens Blower',
      description: 'For keeping lenses and sensors clean',
      link: 'https://www.bhphotovideo.com/c/product/259157-REG/Giottos_AA1900_Rocket_Air_Blower.html',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'DJI Osmo Mobile 7P',
      description: 'Smartphone gimbal for smooth, stabilized footage',
      link: 'https://store.dji.com/product/osmo-mobile-7',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'Hollyland Microphone Set',
      description: 'Wireless microphone system for high-quality audio',
      link: 'https://www.hollyland.com/products/lark',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'Samsung T7 Shield',
      description: 'Rugged external SSD for storing footage in the field',
      link: 'https://www.samsung.com/us/computing/memory-storage/portable-solid-state-drives/t7-shield-portable-ssd-1tb-blue-mu-pe1t0h-am/',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'Apple iPhone Camera Adapter (Lightning)',
      description: 'For transferring photos and videos directly to external storage',
      link: 'https://www.apple.com/shop/product/MD821AM/A/lightning-to-usb-camera-adapter',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'Fujifilm FinePix Z10fd',
      description: 'Retro digital camera for a unique look',
      link: 'https://www.dpreview.com/products/fujifilm/compacts/fuji_finepixz10fd',
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
      </div>
      
      <footer className="w-full text-center mt-16 text-sm text-gray-400">
        © {new Date().getFullYear()} Cole Segura. All rights reserved.
      </footer>
    </main>
  );
}
