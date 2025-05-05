// Import required dependencies
require('dotenv').config();
const { buildConfig } = require('payload/dist/config');
const { postgresAdapter } = require('@payloadcms/db-postgres');
const { lexicalEditor } = require('@payloadcms/richtext-lexical');
const path = require('path');
const payload = require('payload');

async function createAdmin() {
  try {
    console.log('🚀 Starting Payload...');
    
    // Payload config
    const config = buildConfig({
      serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
      collections: [
        // We only need the Users collection defined here
        {
          slug: 'users',
          auth: true,
          admin: {
            useAsTitle: 'email',
          },
          fields: [
            {
              name: 'role',
              type: 'select',
              required: true,
              defaultValue: 'user',
              options: [
                { label: 'Admin', value: 'admin' },
                { label: 'Editor', value: 'editor' },
                { label: 'User', value: 'user' },
              ],
            },
            {
              name: 'firstName',
              type: 'text',
            },
            {
              name: 'lastName',
              type: 'text',
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

    console.log('Payload initialized, creating admin user...');
    
    // Create admin user
    const admin = await payload.create({
      collection: 'users',
      data: {
        email: process.env.ADMIN_EMAIL || 'admin@futureshift.org',
        password: process.env.ADMIN_PASSWORD || 'Admin123!',
        firstName: process.env.ADMIN_FIRSTNAME || 'Admin',
        lastName: process.env.ADMIN_LASTNAME || 'User',
        role: 'admin',
      },
    });

    console.log(`✅ Admin user created successfully with email: ${admin.email}`);
    console.log(`\nYou can now log in at: ${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/admin`);
  } catch (error) {
    console.error('❌ Error creating admin user:', error);
  }
  
  process.exit(0);
}

createAdmin(); 