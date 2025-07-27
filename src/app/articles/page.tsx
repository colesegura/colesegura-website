import Link from 'next/link';
import Navigation from '../../components/Navigation';

export default function ArticlesPage() {
  // This is a placeholder for your future articles
  // You can add actual articles as you write them
  const articles = [
    {
      title: "Coming Soon",
      description: "I'll be posting my articles here. Check back soon!",
      link: "#",
      date: "Future"
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
        <h1 className="text-4xl font-bold mb-8 text-center">Articles</h1>
        
        <p className="mb-8 text-center">
          Here you'll find articles I've written on various topics including technology, travel, and personal development.
        </p>
        
        <div className="space-y-6 mb-12">
          {articles.map((article, index) => (
            <div key={index} className="bg-obsidian p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-2">{article.title}</h3>
              <p className="text-gray-400 mb-2 text-sm">{article.date}</p>
              <p className="text-gray-300 mb-4">{article.description}</p>
              {article.link !== "#" && (
                <Link 
                  href={article.link}
                  className="text-emerald hover:underline inline-block"
                >
                  Read Article →
                </Link>
              )}
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
