export interface User {
  id: string;
  email: string;
  role: 'admin' | 'editor' | 'user';
  firstName?: string;
  lastName?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Author {
  id: string;
  name: string;
  title?: string;
  bio?: string;
  email?: string;
  image?: Media;
  isLeadership?: boolean;
  twitterHandle?: string;
  linkedinUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parentCategory?: Category;
  createdAt: string;
  updatedAt: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Media {
  id: string;
  filename: string;
  alt?: string;
  mimeType: string;
  filesize: number;
  width?: number;
  height?: number;
  url: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: Author;
  category?: Category[];
  tags?: Tag[];
  status: 'draft' | 'published' | 'archived';
  published: boolean;
  isFeatured?: boolean;
  publishedAt?: string;
  featuredImage?: Media;
  excerpt?: string;
  content?: any; // Rich text content
  createdAt: string;
  updatedAt: string;
}

export interface Research {
  id: string;
  title: string;
  slug: string;
  author: Author;
  category?: Category[];
  tags?: Tag[];
  status: 'draft' | 'published' | 'archived';
  published: boolean;
  isFeatured?: boolean;
  publishedAt?: string;
  featuredImage?: Media;
  description?: string;
  content?: any; // Rich text content
  pdfFile?: Media;
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  description?: string;
  content?: any; // Rich text content
  eventType: 'workshop' | 'conference' | 'webinar' | 'meetup' | 'other';
  startDate: string;
  endDate?: string;
  isOnline?: boolean;
  location?: string;
  featuredImage?: Media;
  published: boolean;
  isFeatured?: boolean;
  registrationUrl?: string;
  organizer?: Author;
  speakers?: Author[];
  createdAt: string;
  updatedAt: string;
}

export interface Subscriber {
  id: string;
  email: string;
  name?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  isRead: boolean;
  notes?: string;
  createdAt: string;
  updatedAt: string;
} 