// Import required dependencies
require('dotenv').config();
const { Pool } = require('pg');

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
    console.log('🚀 Connecting to PostgreSQL...');
    
    // Create a connection pool
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    
    // Connect to the database
    const client = await pool.connect();
    console.log('Connected to database');
    
    // Create categories table if it doesn't exist
    const categoriesExist = await client.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'categories'
      );
    `);
    
    if (!categoriesExist.rows[0].exists) {
      console.log('Creating categories table...');
      await client.query(`
        CREATE TABLE categories (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          slug VARCHAR(255) UNIQUE NOT NULL,
          description TEXT,
          created_at TIMESTAMP NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMP NOT NULL DEFAULT NOW()
        );
      `);
      console.log('Categories table created.');
    }
    
    // Create tags table if it doesn't exist
    const tagsExist = await client.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'tags'
      );
    `);
    
    if (!tagsExist.rows[0].exists) {
      console.log('Creating tags table...');
      await client.query(`
        CREATE TABLE tags (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          slug VARCHAR(255) UNIQUE NOT NULL,
          created_at TIMESTAMP NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMP NOT NULL DEFAULT NOW()
        );
      `);
      console.log('Tags table created.');
    }
    
    // Seed categories
    console.log('Seeding categories...');
    let categoriesCreated = 0;
    
    for (const category of defaultCategories) {
      // Check if category already exists
      const existingCategory = await client.query(
        'SELECT * FROM categories WHERE slug = $1',
        [category.slug]
      );
      
      if (existingCategory.rows.length === 0) {
        await client.query(
          'INSERT INTO categories (name, slug, description) VALUES ($1, $2, $3)',
          [category.name, category.slug, category.description]
        );
        categoriesCreated++;
      } else {
        console.log(`Category '${category.name}' already exists, skipping...`);
      }
    }
    
    // Seed tags
    console.log('Seeding tags...');
    let tagsCreated = 0;
    
    for (const tag of defaultTags) {
      // Check if tag already exists
      const existingTag = await client.query(
        'SELECT * FROM tags WHERE slug = $1',
        [tag.slug]
      );
      
      if (existingTag.rows.length === 0) {
        await client.query(
          'INSERT INTO tags (name, slug) VALUES ($1, $2)',
          [tag.name, tag.slug]
        );
        tagsCreated++;
      } else {
        console.log(`Tag '${tag.name}' already exists, skipping...`);
      }
    }
    
    // Close the connection
    client.release();
    await pool.end();
    
    console.log(`✅ Seeding completed successfully!`);
    console.log(`Created ${categoriesCreated} categories and ${tagsCreated} tags.`);
    console.log('Database connection closed');
  } catch (error) {
    console.error('❌ Error seeding data:', error);
  }
  
  process.exit(0);
}

seedData(); 