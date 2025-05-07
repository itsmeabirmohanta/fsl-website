import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { LinkButton } from '@/components/Button';
import AuthorBio from '@/components/blog/AuthorBio';
import { BLOG_IMAGES, PROFILE_IMAGES } from '@/lib/constants/images';

// This would normally be dynamic based on the actual blog post
export const metadata: Metadata = {
  title: 'Why Evidence-Based Policymaking Matters | PolicyLab',
  description: 'Exploring the importance of rigorous research and data analysis in crafting effective public policies that address real-world problems.',
};

interface BlogPostParams {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostParams) {
  // In a real implementation, this would fetch data from a CMS or database
  const slug = params.slug;

  // Mock post data - in a real app this would come from a database or CMS
  const post = {
    title: 'Why Evidence-Based Policymaking Matters',
    description: 'Exploring the importance of rigorous research and data analysis in crafting effective public policies that address real-world problems.',
    date: '2024-05-12',
    imageUrl: BLOG_IMAGES.GOVERNANCE,
    author: {
      name: 'Lisa Chen',
      title: 'Communications Director',
      imageUrl: PROFILE_IMAGES.DEFAULT_AVATAR,
      bio: 'Lisa has over 10 years of experience in policy communications and previously worked at the Brookings Institution. She specializes in translating complex policy ideas into accessible insights.',
      twitterHandle: 'lisachen_policy',
      linkedinUrl: 'https://linkedin.com/in/lisachen'
    },
    category: 'Policy Analysis',
    categorySlug: 'policy-analysis',
    content: `
      <p class="mb-6 text-lg">In an era of increasing political polarization and competing claims to truth, evidence-based policymaking has never been more crucial. But what exactly does "evidence-based" mean, and why should policymakers and citizens alike champion this approach?</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">The Foundation of Effective Policy</h2>
      
      <p class="mb-6">Evidence-based policymaking is the process of making decisions about public policy informed by objective evidence. Rather than ideology, intuition, or tradition alone, this approach relies on rigorous analysis of data and research to identify what works, what doesn't, and why.</p>
      
      <p class="mb-6">When policies are designed based on sound evidence, they're more likely to achieve their intended outcomes. This might seem self-evident, but in practice, policies are often developed in response to political pressures, anecdotes, or untested assumptions. The result can be ineffective programs that waste resources and fail to address the problems they were meant to solve.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Building Public Trust</h2>
      
      <p class="mb-6">Beyond effectiveness, evidence-based policymaking builds public trust. When decisions are grounded in transparent data and analysis rather than opaque political considerations, citizens can better understand and evaluate the rationale behind policies that affect their lives.</p>
      
      <blockquote class="border-l-4 border-blue-600 pl-4 italic my-8 text-lg">
        "The goal is not to have the perfect policy from day one, but to implement, learn, adapt, and improve based on real-world evidence."
      </blockquote>
      
      <p class="mb-6">This transparency is essential for democracy to function effectively. When the public can see that policies are being developed based on evidence rather than ideology, it becomes possible to have more productive conversations across political divides about what works and what doesn't.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Challenges in Implementation</h2>
      
      <p class="mb-6">Despite its benefits, evidence-based policymaking faces significant challenges. One is the difficulty of generating high-quality evidence on complex social issues. Randomized controlled trials—the gold standard in medical research—are often difficult or impossible to conduct in public policy contexts. Observational studies can help fill the gap, but they come with their own limitations.</p>
      
      <p class="mb-6">Another challenge is the political environment in which policymaking occurs. Decision-makers may face pressure to implement policies quickly, before sufficient evidence is available. Or they may be reluctant to change course when evidence suggests that existing policies aren't working as intended.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">The Way Forward</h2>
      
      <p class="mb-6">Despite these challenges, there are reasons for optimism. Advances in data science and evaluation methods are making it easier to generate useful evidence for policymaking. And there's growing recognition among both policymakers and the public of the importance of evidence-based approaches.</p>
      
      <p class="mb-6">The key is to view evidence-based policymaking not as a one-time exercise but as an ongoing process of learning and adaptation. The goal is not to have the perfect policy from day one, but to implement, learn, adapt, and improve based on real-world evidence.</p>
      
      <p class="mb-6">By embracing this approach, we can develop more effective policies, build public trust, and ultimately create better outcomes for communities.</p>
    `,
    relatedPosts: [
      {
        id: 2,
        title: 'Bridging the Urban-Rural Divide',
        href: '/blog/urban-rural-divide'
      },
      {
        id: 3,
        title: 'The Future of Work After Automation',
        href: '/blog/future-of-work'
      },
      {
        id: 4,
        title: 'Digital Privacy in an AI World',
        href: '/blog/digital-privacy-ai'
      }
    ]
  };

  // If the slug doesn't match any post (in a real app, you'd check your database)
  if (slug !== 'evidence-based-policy') {
    return notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-gray-900">
        <Image 
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="text-sm uppercase tracking-wide mb-4">{post.category}</div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto">
              {post.title}
            </h1>
            <div className="flex items-center justify-center text-sm">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span className="mx-2">•</span>
              <span>By {post.author.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg mx-auto" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            
            {/* Author Bio */}
            <div className="border-t border-gray-200 mt-12 pt-8">
              <AuthorBio 
                name={post.author.name}
                title={post.author.title}
                bio={post.author.bio}
                imageUrl={post.author.imageUrl}
                twitterHandle={post.author.twitterHandle}
                linkedinUrl={post.author.linkedinUrl}
                size="large"
              />
            </div>
            
            {/* Share Buttons */}
            <div className="border-t border-gray-200 mt-8 pt-8">
              <h3 className="text-lg font-bold mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  <span className="sr-only">Share on Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  <span className="sr-only">Share on LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  <span className="sr-only">Share by Email</span>
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="space-y-6">
              {post.relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2">
                    <a href={relatedPost.href} className="hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </a>
                  </h3>
                  <a href={relatedPost.href} className="text-blue-600 text-sm hover:underline">
                    Read article →
                  </a>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <LinkButton href="/blog" variant="outline">
                View all articles
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 