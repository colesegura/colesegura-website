import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // Social media links - update these with your actual profiles
  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/colesegura', icon: '/icons/twitter.svg' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/colesegura', icon: '/icons/linkedin.svg' },
    { name: 'GitHub', url: 'https://github.com/colesegura', icon: '/icons/github.svg' },
    // Add more social links as needed
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 relative">
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
            {/* Replace with your actual profile image */}
            <div className="w-full h-full rounded-full bg-gradient-to-r from-emerald to-violet"></div>
            {/* Uncomment when you have a profile image */}
            {/* <Image 
              src="/profile.jpg" 
              alt="Cole Segura" 
              fill
              className="rounded-full object-cover"
            /> */}
          </div>
          
          <h1 className="text-4xl font-bold mb-2">Cole Segura</h1>
          <h2 className="text-xl text-gray-300 mb-6">Developer & Creator</h2>
          
          {/* Bio section */}
          <div className="text-left mb-8">
            <p className="mb-4">
              I'm a passionate developer focused on creating intuitive and beautiful digital experiences. 
              Currently working on HorizonFrame, an app that helps people frame their digital content.
            </p>
            <p>
              With a background in [your background], I specialize in [your specialties]. 
              I'm passionate about [your interests] and always looking for new challenges.
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
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
        
        {/* Projects or additional sections */}
        <div className="w-full mb-12">
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-obsidian p-4 rounded-lg border border-gray-800">
              <h4 className="text-xl font-medium mb-2">HorizonFrame</h4>
              <p className="text-gray-300">An app for framing digital content</p>
              <Link 
                href="https://horizonframeapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald hover:underline mt-2 inline-block"
              >
                Learn more →
              </Link>
            </div>
            
            {/* Add more project cards as needed */}
          </div>
        </div>
        
        {/* Contact section */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="mb-4">
            Interested in working together? Feel free to reach out via email or social media.
          </p>
          <a 
            href="mailto:your-email@example.com" 
            className="px-6 py-3 bg-gradient-to-r from-emerald to-violet rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="w-full text-center mt-16 text-sm text-gray-400">
        © {new Date().getFullYear()} Cole Segura. All rights reserved.
      </footer>
    </main>
  );
}
