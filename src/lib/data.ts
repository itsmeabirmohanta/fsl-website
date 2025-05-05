/**
 * Data Fetching Functions
 * These functions simulate API calls but use the local mock data instead
 */

import {
  blogPosts,
  researchPapers,
  events,
  categories,
  tags,
  teamMembers
} from './mock-data';

// Blog Posts
export function getBlogPosts(options: {
  page?: number;
  limit?: number;
  featured?: boolean;
  categorySlug?: string;
  tag?: string;
  search?: string;
} = {}) {
  const {
    page = 1,
    limit = 10,
    featured,
    categorySlug,
    tag,
    search
  } = options;

  let filteredPosts = [...blogPosts];

  // Apply filters
  if (featured !== undefined) {
    filteredPosts = filteredPosts.filter(post => post.isFeatured === featured);
  }

  if (categorySlug) {
    filteredPosts = filteredPosts.filter(post => post.categorySlug === categorySlug);
  }

  if (tag) {
    filteredPosts = filteredPosts.filter(post => post.tags.some(t => 
      t.toLowerCase() === tag.toLowerCase()
    ));
  }

  if (search) {
    const searchLower = search.toLowerCase();
    filteredPosts = filteredPosts.filter(post => 
      post.title.toLowerCase().includes(searchLower) ||
      post.description.toLowerCase().includes(searchLower)
    );
  }

  // Sort by date (newest first)
  filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Apply pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  return {
    posts: paginatedPosts,
    pagination: {
      total: filteredPosts.length,
      page,
      limit,
      totalPages: Math.ceil(filteredPosts.length / limit)
    }
  };
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug) || null;
}

// Research Papers
export function getResearchPapers(options: {
  page?: number;
  limit?: number;
  featured?: boolean;
  categorySlug?: string;
  tag?: string;
  search?: string;
} = {}) {
  const {
    page = 1,
    limit = 10,
    featured,
    categorySlug,
    tag,
    search
  } = options;

  let filteredPapers = [...researchPapers];

  // Apply filters
  if (featured !== undefined) {
    filteredPapers = filteredPapers.filter(paper => paper.isFeatured === featured);
  }

  if (categorySlug) {
    filteredPapers = filteredPapers.filter(paper => paper.categorySlug === categorySlug);
  }

  if (tag) {
    filteredPapers = filteredPapers.filter(paper => paper.tags.some(t => 
      t.toLowerCase() === tag.toLowerCase()
    ));
  }

  if (search) {
    const searchLower = search.toLowerCase();
    filteredPapers = filteredPapers.filter(paper => 
      paper.title.toLowerCase().includes(searchLower) ||
      paper.description.toLowerCase().includes(searchLower)
    );
  }

  // Sort by date (newest first)
  filteredPapers.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Apply pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedPapers = filteredPapers.slice(startIndex, endIndex);

  return {
    papers: paginatedPapers,
    pagination: {
      total: filteredPapers.length,
      page,
      limit,
      totalPages: Math.ceil(filteredPapers.length / limit)
    }
  };
}

export function getResearchPaperBySlug(slug: string) {
  return researchPapers.find(paper => paper.slug === slug) || null;
}

// Events
export function getEvents(options: {
  page?: number;
  limit?: number;
  featured?: boolean;
  upcoming?: boolean;
  search?: string;
} = {}) {
  const {
    page = 1,
    limit = 10,
    featured,
    upcoming,
    search
  } = options;

  let filteredEvents = [...events];

  // Apply filters
  if (featured !== undefined) {
    filteredEvents = filteredEvents.filter(event => event.isFeatured === featured);
  }

  if (upcoming) {
    const now = new Date().getTime();
    filteredEvents = filteredEvents.filter(event => new Date(event.startDate).getTime() > now);
  }

  if (search) {
    const searchLower = search.toLowerCase();
    filteredEvents = filteredEvents.filter(event => 
      event.title.toLowerCase().includes(searchLower) ||
      event.description.toLowerCase().includes(searchLower)
    );
  }

  // Sort by date (upcoming events first)
  filteredEvents.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

  // Apply pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedEvents = filteredEvents.slice(startIndex, endIndex);

  return {
    events: paginatedEvents,
    pagination: {
      total: filteredEvents.length,
      page,
      limit,
      totalPages: Math.ceil(filteredEvents.length / limit)
    }
  };
}

export function getEventBySlug(slug: string) {
  return events.find(event => event.slug === slug) || null;
}

// Categories
export function getCategories() {
  return categories;
}

export function getCategoryBySlug(slug: string) {
  return categories.find(category => category.slug === slug) || null;
}

// Tags
export function getTags() {
  return tags;
}

export function getTagBySlug(slug: string) {
  return tags.find(tag => tag.slug === slug) || null;
}

// Team Members
export function getTeamMembers(options: {
  leadership?: boolean;
} = {}) {
  const { leadership } = options;

  if (leadership !== undefined) {
    return teamMembers.filter(member => member.isLeadership === leadership);
  }

  return teamMembers;
}

// Form Submissions
export function submitContactForm(data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) {
  // Simulate a successful form submission
  console.log('Contact form submitted:', data);
  return { success: true, message: 'Thank you for your message! We will get back to you soon.' };
}

export function subscribeToNewsletter(data: {
  email: string;
  name?: string;
}) {
  // Simulate a successful newsletter subscription
  console.log('Newsletter subscription:', data);
  return { success: true, message: 'Thank you for subscribing to our newsletter!' };
} 