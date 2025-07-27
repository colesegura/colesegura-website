import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function Home() {
  // Social media links
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/colesegura', icon: '/icons/linkedin.svg' },
    { name: 'Instagram', url: 'https://www.instagram.com/cole.segura/', icon: '/icons/instagram.svg' },
    { name: 'YouTube', url: 'https://www.youtube.com/@colesegura', icon: '/icons/youtube.svg' }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 pt-20 md:p-24 md:pt-28 relative">
      <Navigation />
      {/* Aurora background effect */}
      <div className="aurora">
        <div className="aurora-wave"></div>
        <div className="aurora-wave"></div>
        <div className="aurora-wave"></div>
      </div>
      
      {/* Content container */}
      <div className="z-10 max-w-3xl w-full flex flex-col items-center justify-center text-center">
        {/* Profile section */}
        <div className="mb-12">
          <div className="relative w-32 h-32 mb-6 mx-auto">
            <Image 
              src="/images/Headshot.JPG" 
              alt="Cole Segura" 
              fill
              className="rounded-full object-cover border-2 border-emerald"
            />
          </div>
          
          <h1 className="text-4xl font-bold mb-2">Cole Segura</h1>
          <h2 className="text-xl text-gray-300 mb-6">Developer & Creator</h2>
          
          {/* Bio section */}
          <div className="text-left mb-8">
            <p className="mb-4">
              I'm a Computer Science student at The University of Alabama. I also created HorizonFrame, a mobile app designed to help you stay aligned with your dreams.
            </p>
            <p>
              I love traveling and making content while I'm out and about exploring the world.
            </p>
          </div>
        </div>
        
        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {socialLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-obsidian border border-gray-700 rounded-full hover:bg-gray-800 transition-colors"
            >
              <Image src={link.icon} alt={link.name} width={20} height={20} className="mr-2" />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
        
        {/* Projects section */}
        <div className="w-full mb-12">
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <div className="flex justify-center">
            <Link 
              href="https://horizonframeapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative w-24 h-24 mx-auto">
                <Image 
                  src="/images/HorizonFrameLogo.png" 
                  alt="HorizonFrame Logo" 
                  fill
                  className="rounded-[20px] object-contain shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-center mt-2 text-emerald">HorizonFrame</p>
            </Link>
          </div>
        </div>
        
        {/* Contact section */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="mb-4">
            Interested in working together? Feel free to reach out via email or social media.
          </p>
          <a 
            href="mailto:cole@colesegura.com" 
            className="px-6 py-3 bg-gradient-to-r from-emerald to-violet rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Featured Photo */}
      <div className="w-full mt-12">
        <div className="w-full">
          <div className="relative h-96 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.01]">
            <Image
              src="/images/PersonalImage2.jpg"
              alt="Cole Segura"
              width={1200}
              height={600}
              style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="w-full text-center mt-16 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Cole Segura. All rights reserved.
      </footer>
    </main>
  );
}
