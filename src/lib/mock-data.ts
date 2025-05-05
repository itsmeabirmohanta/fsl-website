/**
 * Mock data for the website
 * This replaces the dynamic data that was previously fetched from the backend
 */

// Blog Posts
export const blogPosts = [
  {
    id: '1',
    title: 'Why Evidence-Based Policymaking Matters',
    slug: 'evidence-based-policy',
    description: 'Exploring the importance of rigorous research and data analysis in crafting effective public policies.',
    date: '2024-05-12',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    author: {
      name: 'Lisa Chen',
      title: 'Communications Director',
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    category: 'Policy Analysis',
    categorySlug: 'policy-analysis',
    isFeatured: true,
    tags: ['Evidence', 'Policy', 'Research'],
    content: '<p>This is a sample content for the blog post. In a real application, this would be rich text content stored in the database. For now, we\'re using this placeholder.</p>'
  },
  {
    id: '2',
    title: 'Bridging the Urban-Rural Divide',
    slug: 'urban-rural-divide',
    description: 'New approaches to connecting communities and addressing disparities between urban and rural areas.',
    date: '2024-05-05',
    imageUrl: 'https://images.unsplash.com/photo-1617469767053-8d5e2bf61b62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    author: {
      name: 'Marcus Johnson',
      title: 'Senior Policy Advisor'
    },
    category: 'Social Policy',
    categorySlug: 'social-policy',
    isFeatured: false,
    tags: ['Rural', 'Urban', 'Inequality'],
    content: '<p>This is a sample content for the blog post. In a real application, this would be rich text content stored in the database. For now, we\'re using this placeholder.</p>'
  },
  {
    id: '3',
    title: 'The Future of Work After Automation',
    slug: 'future-of-work',
    description: 'Examining the impact of automation on labor markets and policy responses to technological disruption.',
    date: '2024-04-28',
    imageUrl: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    author: {
      name: 'Alex Wong',
      title: 'Research Director'
    },
    category: 'Economic Policy',
    categorySlug: 'economic-policy',
    isFeatured: false,
    tags: ['Automation', 'Future of Work', 'Economy'],
    content: '<p>This is a sample content for the blog post. In a real application, this would be rich text content stored in the database. For now, we\'re using this placeholder.</p>'
  },
  {
    id: '4',
    title: 'Digital Privacy in an AI World',
    slug: 'digital-privacy-ai',
    description: 'Balancing innovation and privacy protections in an era of rapid AI advancement.',
    date: '2024-04-20',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    author: {
      name: 'Sarah Patel',
      title: 'Technology Policy Fellow'
    },
    category: 'Technology Policy',
    categorySlug: 'technology-policy',
    isFeatured: false,
    tags: ['Privacy', 'AI', 'Technology'],
    content: '<p>This is a sample content for the blog post. In a real application, this would be rich text content stored in the database. For now, we\'re using this placeholder.</p>'
  }
];

// Research Papers
export const researchPapers = [
  {
    id: '1',
    title: 'The Future of Climate Policy: A Global Perspective',
    slug: 'future-of-climate-policy',
    description: 'An in-depth analysis of international climate policies and their impact on global sustainability goals.',
    date: '2024-03-15',
    imageUrl: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    author: {
      name: 'Dr. Emma Thompson',
      title: 'Climate Policy Researcher'
    },
    category: 'Environmental Policy',
    categorySlug: 'environmental-policy',
    isFeatured: true,
    tags: ['Climate', 'Policy', 'Global'],
    content: '<p>This is a sample content for the research paper. In a real application, this would be rich text content stored in the database. For now, we\'re using this placeholder.</p>',
    pdfUrl: '/sample.pdf'
  },
  {
    id: '2',
    title: 'Healthcare Access in Rural Communities',
    slug: 'healthcare-access-rural-communities',
    description: 'Examining the challenges and solutions for improving healthcare accessibility in rural areas.',
    date: '2024-03-08',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    author: {
      name: 'Dr. Sarah Chen',
      title: 'Healthcare Policy Expert'
    },
    category: 'Social Policy',
    categorySlug: 'social-policy',
    isFeatured: false,
    tags: ['Healthcare', 'Rural', 'Access'],
    content: '<p>This is a sample content for the research paper. In a real application, this would be rich text content stored in the database. For now, we\'re using this placeholder.</p>',
    pdfUrl: '/sample.pdf'
  }
];

// Events
export const events = [
  {
    id: '1',
    title: 'Future of AI Governance Conference',
    slug: 'future-ai-governance-conference',
    description: 'Join leading experts in discussing the future of AI regulation and governance frameworks.',
    content: '<p>This is a sample content for the event. In a real application, this would be rich text content stored in the database. For now, we\'re using this placeholder.</p>',
    eventType: 'Conference',
    startDate: '2024-06-15T09:00:00Z',
    endDate: '2024-06-16T17:00:00Z',
    isOnline: false,
    location: 'Grand Conference Center, Washington DC',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80',
    published: true,
    isFeatured: true,
    registrationUrl: 'https://example.com/register',
    organizer: {
      name: 'Future Shift Labs',
      email: 'events@futureshift.org'
    },
    speakers: [
      {
        name: 'Dr. Emma Thompson',
        title: 'AI Ethics Researcher'
      },
      {
        name: 'Prof. James Wilson',
        title: 'Technology Policy Director'
      }
    ]
  },
  {
    id: '2',
    title: 'Climate Policy Workshop',
    slug: 'climate-policy-workshop',
    description: 'Practical workshop on developing effective climate policies at the local level.',
    content: '<p>This is a sample content for the event. In a real application, this would be rich text content stored in the database. For now, we\'re using this placeholder.</p>',
    eventType: 'Workshop',
    startDate: '2024-05-20T10:00:00Z',
    endDate: '2024-05-20T16:00:00Z',
    isOnline: true,
    location: 'Zoom',
    imageUrl: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80',
    published: true,
    isFeatured: false,
    registrationUrl: 'https://example.com/register',
    organizer: {
      name: 'Climate Action Team',
      email: 'climate@futureshift.org'
    },
    speakers: [
      {
        name: 'Maria Garcia',
        title: 'Environmental Policy Analyst'
      }
    ]
  }
];

// Categories
export const categories = [
  {
    id: '1',
    name: 'Policy Analysis',
    slug: 'policy-analysis',
    description: 'Analysis of current policy frameworks and recommendations'
  },
  {
    id: '2',
    name: 'Technology Policy',
    slug: 'technology-policy',
    description: 'Policies related to technology, AI, and digital governance'
  },
  {
    id: '3',
    name: 'Economic Policy',
    slug: 'economic-policy',
    description: 'Analysis of economic trends and policy implications'
  },
  {
    id: '4',
    name: 'Social Policy',
    slug: 'social-policy',
    description: 'Policies addressing social issues and community welfare'
  },
  {
    id: '5',
    name: 'Environmental Policy',
    slug: 'environmental-policy',
    description: 'Policies related to climate change and environmental protection'
  }
];

// Tags
export const tags = [
  { id: '1', name: 'AI', slug: 'ai' },
  { id: '2', name: 'Climate', slug: 'climate' },
  { id: '3', name: 'Education', slug: 'education' },
  { id: '4', name: 'Healthcare', slug: 'healthcare' },
  { id: '5', name: 'Innovation', slug: 'innovation' },
  { id: '6', name: 'Governance', slug: 'governance' },
  { id: '7', name: 'Future of Work', slug: 'future-of-work' }
];

// Team members
export const teamMembers = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    role: 'Executive Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    bio: 'Former policy advisor with 15+ years experience in public policy and research leadership.',
    social: {
      twitter: 'https://twitter.com/drsarahchen',
      linkedin: 'https://linkedin.com/in/drsarahchen',
    },
    isLeadership: true,
  },
  {
    id: '2',
    name: 'Prof. Michael Rivera',
    role: 'Research Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    bio: 'Leading expert in education policy with extensive experience in policy implementation.',
    social: {
      twitter: 'https://twitter.com/profrivera',
      linkedin: 'https://linkedin.com/in/profrivera',
    },
    isLeadership: true,
  },
  {
    id: '3',
    name: 'Dr. Emma Thompson',
    role: 'Policy Director',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    bio: 'Specializes in environmental policy with a focus on climate change initiatives.',
    social: {
      twitter: 'https://twitter.com/dremmathompson',
      linkedin: 'https://linkedin.com/in/dremmathompson',
    },
    isLeadership: true,
  },
  {
    id: '4',
    name: 'Alex Johnson',
    role: 'Senior Researcher',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    bio: 'Specializes in technology policy and digital governance.',
    social: {
      twitter: 'https://twitter.com/alexjohnson',
      linkedin: 'https://linkedin.com/in/alexjohnson',
    },
    isLeadership: false,
  },
  {
    id: '5',
    name: 'Maria Garcia',
    role: 'Policy Analyst',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    bio: 'Focuses on economic inequality and social policy solutions.',
    social: {
      twitter: 'https://twitter.com/mariagarcia',
      linkedin: 'https://linkedin.com/in/mariagarcia',
    },
    isLeadership: false,
  }
]; 