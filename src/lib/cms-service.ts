import { prisma } from './db';

/**
 * CMS Service
 * Provides a robust service layer for CMS operations with proper error handling and transactions
 */

class CMSService {
  // Content Type Handlers
  // Blog Post Operations
  async getBlogPosts({
    page = 1,
    limit = 10,
    categoryId,
    categorySlug,
    authorId,
    published,
    featured,
    search,
    orderBy = 'publishedAt',
    orderDirection = 'desc'
  } = {}) {
    try {
      const skip = (page - 1) * limit;
      const where: any = {};
      
      if (categoryId) where.categoryId = categoryId;
      if (categorySlug) where.category = { slug: categorySlug };
      if (authorId) where.authorId = authorId;
      if (published !== undefined) where.published = published;
      if (featured !== undefined) where.isFeatured = featured;
      
      if (search) {
        where.OR = [
          { title: { contains: search, mode: 'insensitive' } },
          { content: { contains: search, mode: 'insensitive' } },
        ];
      }
      
      const [posts, total] = await Promise.all([
        prisma.blogPost.findMany({
          where,
          take: limit,
          skip,
          include: {
            author: true,
            category: true,
            tags: true
          },
          orderBy: {
            [orderBy]: orderDirection
          }
        }),
        prisma.blogPost.count({ where })
      ]);
      
      return {
        data: posts,
        pagination: {
          page,
          limit,
          totalItems: total,
          totalPages: Math.ceil(total / limit)
        }
      };
    } catch (error) {
      console.error('Error in getBlogPosts:', error);
      throw new Error('Failed to fetch blog posts');
    }
  }

  async getBlogPost(idOrSlug, type = 'id') {
    try {
      const where = type === 'slug' ? { slug: idOrSlug } : { id: idOrSlug };
      
      const post = await prisma.blogPost.findUnique({
        where,
        include: {
          author: true,
          category: true,
          tags: true
        }
      });
      
      if (!post) {
        throw new Error('Blog post not found');
      }
      
      return post;
    } catch (error) {
      console.error(`Error in getBlogPost (${type}):`, error);
      throw error;
    }
  }

  async createBlogPost(data, userId) {
    try {
      return await prisma.blogPost.create({
        data: {
          title: data.title,
          slug: data.slug,
          content: data.content,
          description: data.description || data.excerpt || '',
          published: data.published || false,
          isFeatured: data.featured || false,
          imageUrl: data.imageUrl,
          authorId: data.authorId,
          categoryId: data.categoryId,
          createdById: userId,
          publishedAt: data.published ? new Date() : null,
          tags: {
            connect: data.tags?.map(tagId => ({ id: tagId })) || []
          }
        },
        include: {
          author: true,
          category: true,
          tags: true
        }
      });
    } catch (error) {
      console.error('Error in createBlogPost:', error);
      throw new Error('Failed to create blog post');
    }
  }

  async updateBlogPost(id, data) {
    try {
      const updateData: any = {
        title: data.title,
        slug: data.slug,
        content: data.content,
        description: data.description || data.excerpt || '',
        published: data.published,
        isFeatured: data.featured,
        imageUrl: data.imageUrl,
        categoryId: data.categoryId,
        authorId: data.authorId,
        updatedAt: new Date()
      };
      
      // Only update publishedAt if publishing for the first time
      if (data.published && !data.publishedAt) {
        updateData.publishedAt = new Date();
      }
      
      return await prisma.blogPost.update({
        where: { id },
        data: {
          ...updateData,
          tags: {
            set: data.tags?.map(tagId => ({ id: tagId })) || []
          }
        },
        include: {
          author: true,
          category: true,
          tags: true
        }
      });
    } catch (error) {
      console.error('Error in updateBlogPost:', error);
      throw new Error('Failed to update blog post');
    }
  }

  async deleteBlogPost(id) {
    try {
      await prisma.blogPost.delete({
        where: { id }
      });
      return { success: true };
    } catch (error) {
      console.error('Error in deleteBlogPost:', error);
      throw new Error('Failed to delete blog post');
    }
  }

  // Research Operations
  async getResearchPapers({
    page = 1,
    limit = 10,
    categoryId,
    categorySlug,
    authorId,
    published,
    featured,
    search,
    orderBy = 'publishedAt',
    orderDirection = 'desc'
  } = {}) {
    try {
      const skip = (page - 1) * limit;
      const where: any = {};
      
      if (categoryId) where.categoryId = categoryId;
      if (categorySlug) where.category = { slug: categorySlug };
      if (authorId) where.authorId = authorId;
      if (published !== undefined) where.published = published;
      if (featured !== undefined) where.isFeatured = featured;
      
      if (search) {
        where.OR = [
          { title: { contains: search, mode: 'insensitive' } },
          { content: { contains: search, mode: 'insensitive' } },
        ];
      }
      
      const [papers, total] = await Promise.all([
        prisma.research.findMany({
          where,
          take: limit,
          skip,
          include: {
            author: true,
            category: true,
            tags: true
          },
          orderBy: {
            [orderBy]: orderDirection
          }
        }),
        prisma.research.count({ where })
      ]);
      
      return {
        data: papers,
        pagination: {
          page,
          limit,
          totalItems: total,
          totalPages: Math.ceil(total / limit)
        }
      };
    } catch (error) {
      console.error('Error in getResearchPapers:', error);
      throw new Error('Failed to fetch research papers');
    }
  }

  // Events Operations
  async getEvents({
    page = 1,
    limit = 10,
    upcoming,
    published,
    featured,
    search,
    orderBy = 'startDate',
    orderDirection = 'asc'
  } = {}) {
    try {
      const skip = (page - 1) * limit;
      const where: any = {};
      
      if (upcoming) {
        where.startDate = {
          gte: new Date()
        };
      }
      
      if (published !== undefined) where.published = published;
      if (featured !== undefined) where.isFeatured = featured;
      
      if (search) {
        where.OR = [
          { title: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } },
        ];
      }
      
      const [events, total] = await Promise.all([
        prisma.event.findMany({
          where,
          take: limit,
          skip,
          include: {
            createdBy: true,
            registrations: true
          },
          orderBy: {
            [orderBy]: orderDirection
          }
        }),
        prisma.event.count({ where })
      ]);
      
      return {
        data: events,
        pagination: {
          page,
          limit,
          totalItems: total,
          totalPages: Math.ceil(total / limit)
        }
      };
    } catch (error) {
      console.error('Error in getEvents:', error);
      throw new Error('Failed to fetch events');
    }
  }

  // Categories Operations
  async getCategories() {
    try {
      return await prisma.category.findMany({
        orderBy: {
          name: 'asc'
        }
      });
    } catch (error) {
      console.error('Error in getCategories:', error);
      throw new Error('Failed to fetch categories');
    }
  }

  // Authors Operations
  async getAuthors() {
    try {
      return await prisma.author.findMany({
        orderBy: {
          name: 'asc'
        }
      });
    } catch (error) {
      console.error('Error in getAuthors:', error);
      throw new Error('Failed to fetch authors');
    }
  }

  // Subscribers Operations
  async addSubscriber({ email, name }) {
    try {
      return await prisma.subscriber.upsert({
        where: { email },
        update: {
          isActive: true,
          name: name || undefined
        },
        create: {
          email,
          name,
          isActive: true
        }
      });
    } catch (error) {
      console.error('Error in addSubscriber:', error);
      throw new Error('Failed to add subscriber');
    }
  }

  // Contact Messages
  async createContactMessage(data) {
    try {
      return await prisma.contactMessage.create({
        data: {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message
        }
      });
    } catch (error) {
      console.error('Error in createContactMessage:', error);
      throw new Error('Failed to create contact message');
    }
  }
}

// Export a singleton instance
export const cmsService = new CMSService();

// Also export the class for testing or extension
export default CMSService; 