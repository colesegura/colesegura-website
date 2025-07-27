import Link from 'next/link';
import Navigation from '../../components/Navigation';

export default function BooksPage() {
  // This is a placeholder for your future book reviews
  // You can add actual reviews as you write them
  const bookReviews = [
    {
      title: "Coming Soon",
      description: "I'll be posting my book reviews here. Check back soon!",
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
        <h1 className="text-4xl font-bold mb-8 text-center">Book Reviews</h1>
        
        <p className="mb-8 text-center">
          I love reading and sharing my thoughts on books. Here you'll find reviews of books I've read recently.
        </p>
        
        <div className="space-y-6 mb-12">
          {bookReviews.map((review, index) => (
            <div key={index} className="bg-obsidian p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-2">{review.title}</h3>
              <p className="text-gray-400 mb-2 text-sm">{review.date}</p>
              <p className="text-gray-300 mb-4">{review.description}</p>
              {review.link !== "#" && (
                <Link 
                  href={review.link}
                  className="text-emerald hover:underline inline-block"
                >
                  Read Review →
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
