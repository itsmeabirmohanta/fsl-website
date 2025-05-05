import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';

interface CategoryPageParams {
  params: {
    category: string;
  };
}

// This would be dynamically generated in a real app based on the category
export function generateMetadata({ params }: CategoryPageParams): Metadata {
  const categoryName = getCategoryName(params.category);
  
  return {
    title: `${categoryName} | PolicyLab Blog`,
    description: `Latest research and insights on ${categoryName.toLowerCase()} from PolicyLab experts.`,
  };
}

// In a real app, this would validate against a list of valid categories
function getCategoryName(slug: string): string {
  const categories: Record<string, string> = {
    'policy-analysis': 'Policy Analysis',
    'economic-policy': 'Economic Policy',
    'social-policy': 'Social Policy',
    'technology-policy': 'Technology Policy',
    'environmental-policy': 'Environmental Policy',
  };
  
  return categories[slug] || 'Category Not Found';
}

// Sample blog posts data - in a real app, this would come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: 'Why Evidence-Based Policymaking Matters',
    description: 'Exploring the importance of rigorous research and data analysis in crafting effective public policies.',
    date: '2024-05-12',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    author: 'Lisa Chen',
    category: 'policy-analysis',
    href: '/blog/evidence-based-policy',
  },
  {
    id: 2,
    title: 'Bridging the Urban-Rural Divide',
    description: 'New approaches to connecting communities and addressing disparities between urban and rural areas.',
    date: '2024-05-05',
    imageUrl: 'https://images.unsplash.com/photo-1617469767053-8d5e2bf61b62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    author: 'Marcus Johnson',
    category: 'social-policy',
    href: '/blog/urban-rural-divide',
  },
  {
    id: 3,
    title: 'The Future of Work After Automation',
    description: 'Examining the impact of automation on labor markets and policy responses to technological disruption.',
    date: '2024-04-28',
    imageUrl: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    author: 'Alex Wong',
    category: 'economic-policy',
    href: '/blog/future-of-work',
  },
  {
    id: 4,
    title: 'Digital Privacy in an AI World',
    description: 'Balancing innovation and privacy protections in an era of rapid AI advancement.',
    date: '2024-04-20',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    author: 'Sarah Patel',
    category: 'technology-policy',
    href: '/blog/digital-privacy-ai',
  },
  {
    id: 5,
    title: 'Climate Policy for a Warming Planet',
    description: 'Innovative approaches to addressing climate change through effective policy frameworks.',
    date: '2024-04-12',
    imageUrl: 'https://images.unsplash.com/photo-1569511166187-97eb6e387e19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    author: 'David Chen',
    category: 'environmental-policy',
    href: '/blog/climate-policy',
  },
  {
    id: 6,
    title: 'Building Inclusive Economic Systems',
    description: 'Strategies for creating economic policies that benefit communities across the socioeconomic spectrum.',
    date: '2024-04-05',
    imageUrl: 'https://images.unsplash.com/photo-1579170053380-58064b2dee67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    author: 'Michelle Rivera',
    category: 'economic-policy',
    href: '/blog/inclusive-economics',
  },
];

export default function CategoryPage({ params }: CategoryPageParams) {
  const categorySlug = params.category;
  const categoryName = getCategoryName(categorySlug);
  
  // If invalid category
  if (categoryName === 'Category Not Found') {
    return notFound();
  }
  
  // Filter posts by category
  const categoryPosts = blogPosts.filter(post => post.category === categorySlug);
  
  return (
    <>
      {/* Header */}
      <header className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">{categoryName}</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Explore our latest research, analysis, and insights on {categoryName.toLowerCase()}.
          </p>
        </div>
      </header>
      
      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {categoryPosts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">No posts found</h2>
              <p className="text-gray-600 mb-8">
                We haven&apos;t published any posts in this category yet. Check back soon!
              </p>
              <Link href="/blog">
                <Button>View all blog posts</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 relative">
                    <Image 
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                    <h2 className="text-xl font-bold mb-2">
                      <Link href={post.href} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">By {post.author}</div>
                      <Link href={post.href} className="text-blue-600 text-sm hover:underline">
                        Read more →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Pagination */}
          {categoryPosts.length > 0 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center">
                <button className="px-4 py-2 mr-2 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50" disabled>
                  Previous
                </button>
                <div className="flex space-x-1">
                  <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-md">1</a>
                </div>
                <button className="px-4 py-2 ml-2 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50" disabled>
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>
      
      {/* All Categories Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Browse All Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/blog/category/policy-analysis" className={`px-4 py-2 rounded-full ${categorySlug === 'policy-analysis' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300 hover:bg-gray-100'}`}>
              Policy Analysis
            </Link>
            <Link href="/blog/category/economic-policy" className={`px-4 py-2 rounded-full ${categorySlug === 'economic-policy' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300 hover:bg-gray-100'}`}>
              Economic Policy
            </Link>
            <Link href="/blog/category/social-policy" className={`px-4 py-2 rounded-full ${categorySlug === 'social-policy' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300 hover:bg-gray-100'}`}>
              Social Policy
            </Link>
            <Link href="/blog/category/technology-policy" className={`px-4 py-2 rounded-full ${categorySlug === 'technology-policy' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300 hover:bg-gray-100'}`}>
              Technology Policy
            </Link>
            <Link href="/blog/category/environmental-policy" className={`px-4 py-2 rounded-full ${categorySlug === 'environmental-policy' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300 hover:bg-gray-100'}`}>
              Environmental Policy
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog">
              <Button variant="outline">View all blog posts</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 