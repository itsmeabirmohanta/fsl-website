// Import required dependencies
require('dotenv').config();
const { buildConfig } = require('payload/dist/config');
const { postgresAdapter } = require('@payloadcms/db-postgres');
const path = require('path');
const payload = require('payload');

// Initial data
const defaultCategories = [
  {
    name: 'Policy Analysis',
    slug: 'policy-analysis',
    description: 'Analysis of current policy frameworks and recommendations'
  },
  {
    name: 'Technology Policy',
    slug: 'technology-policy',
    description: 'Policies related to technology, AI, and digital governance'
  },
  {
    name: 'Economic Policy',
    slug: 'economic-policy',
    description: 'Analysis of economic trends and policy implications'
  },
  {
    name: 'Social Policy',
    slug: 'social-policy',
    description: 'Policies addressing social issues and community welfare'
  },
  {
    name: 'Environmental Policy',
    slug: 'environmental-policy',
    description: 'Policies related to climate change and environmental protection'
  }
];

const defaultTags = [
  { name: 'AI', slug: 'ai' },
  { name: 'Climate', slug: 'climate' },
  { name: 'Education', slug: 'education' },
  { name: 'Healthcare', slug: 'healthcare' },
  { name: 'Innovation', slug: 'innovation' },
  { name: 'Governance', slug: 'governance' },
  { name: 'Future of Work', slug: 'future-of-work' }
];

async function seedData() {
  try {
    console.log('🚀 Initializing Payload...');
    
    // Payload config
    const config = buildConfig({
      serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
      collections: [
        // Only define the collections we need
        {
          slug: 'categories',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'slug',
              type: 'text',
              required: true,
              unique: true,
            },
            {
              name: 'description',
              type: 'textarea',
            }
          ],
        },
        {
          slug: 'tags',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'slug',
              type: 'text',
              required: true,
              unique: true,
            }
          ],
        }
      ],
      db: postgresAdapter({
        pool: {
          connectionString: process.env.DATABASE_URL
        }
      }),
      secret: process.env.PAYLOAD_SECRET || 'a-random-secret-key',
      local: true,
    });

    // Initialize Payload
    await payload.init({
      secret: config.secret,
      local: config.local,
      express: null, 
      db: config.db,
      collections: config.collections,
    });
    
    console.log('Payload initialized, beginning data seeding...');
    
    // Seed categories
    console.log('Seeding categories...');
    let categoriesCreated = 0;
    
    for (const category of defaultCategories) {
      try {
        // Check if category already exists
        const existingCategory = await payload.find({
          collection: 'categories',
          where: {
            slug: {
              equals: category.slug
            }
          }
        });
        
        if (existingCategory.docs.length === 0) {
          await payload.create({
            collection: 'categories',
            data: category
          });
          categoriesCreated++;
        } else {
          console.log(`Category '${category.name}' already exists, skipping...`);
        }
      } catch (err) {
        console.error(`Error creating category '${category.name}':`, err.message);
      }
    }
    
    // Seed tags
    console.log('Seeding tags...');
    let tagsCreated = 0;
    
    for (const tag of defaultTags) {
      try {
        // Check if tag already exists
        const existingTag = await payload.find({
          collection: 'tags',
          where: {
            slug: {
              equals: tag.slug
            }
          }
        });
        
        if (existingTag.docs.length === 0) {
          await payload.create({
            collection: 'tags',
            data: tag
          });
          tagsCreated++;
        } else {
          console.log(`Tag '${tag.name}' already exists, skipping...`);
        }
      } catch (err) {
        console.error(`Error creating tag '${tag.name}':`, err.message);
      }
    }
    
    console.log(`✅ Seeding completed successfully!`);
    console.log(`Created ${categoriesCreated} categories and ${tagsCreated} tags.`);
    
  } catch (error) {
    console.error('❌ Error seeding data:', error);
  }
  
  process.exit(0);
}

seedData(); 