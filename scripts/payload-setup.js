/**
 * Payload CMS Setup Script
 * This script helps initialize the Payload CMS with initial data
 */

require('dotenv').config();
const path = require('path');
const payload = require('payload');
const { buildConfig } = require('payload/dist/config');
const { postgresAdapter } = require('@payloadcms/db-postgres');

// Initialize Payload
async function main() {
  console.log('Starting Payload CMS setup...');

  try {
    // Build minimal config with just what we need
    const config = buildConfig({
      serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
      collections: [
        // Only define the collections we need for this script
        {
          slug: 'users',
          auth: true,
          fields: [
            {
              name: 'role',
              type: 'select',
              options: [
                { label: 'Admin', value: 'admin' },
                { label: 'Editor', value: 'editor' },
                { label: 'User', value: 'user' },
              ],
            },
          ],
        },
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
            },
          ],
        },
      ],
      db: postgresAdapter({
        pool: {
          connectionString: process.env.DATABASE_URL
        }
      }),
      secret: process.env.PAYLOAD_SECRET || 'a-complex-secret-here',
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

    // Check if admin user exists, if not create one
    const adminEmail = 'admin@example.com';
    const existingAdmin = await payload.find({
      collection: 'users',
      where: { email: { equals: adminEmail } },
    });

    if (existingAdmin.totalDocs === 0) {
      console.log('Creating admin user...');
      await payload.create({
        collection: 'users',
        data: {
          email: adminEmail,
          password: 'changeme123', // This should be changed immediately after setup
          role: 'admin',
        },
      });
      console.log('Admin user created successfully!');
    } else {
      console.log('Admin user already exists');
    }

    // Create default categories if they don't exist
    const defaultCategories = ['Policy', 'Technology', 'Environment', 'Economics', 'Social Issues'];
    
    for (const categoryName of defaultCategories) {
      const slug = categoryName.toLowerCase().replace(/\s+/g, '-');
      const existingCategory = await payload.find({
        collection: 'categories',
        where: { slug: { equals: slug } },
      });

      if (existingCategory.totalDocs === 0) {
        console.log(`Creating category: ${categoryName}...`);
        await payload.create({
          collection: 'categories',
          data: {
            name: categoryName,
            slug: slug,
            description: `Content related to ${categoryName.toLowerCase()}`,
          },
        });
      }
    }

    console.log('Categories setup completed');
    console.log('Payload CMS setup completed successfully!');
  } catch (error) {
    console.error('Error during setup:', error);
  }

  // Exit the process
  process.exit(0);
}

main(); 