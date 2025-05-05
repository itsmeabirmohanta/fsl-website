// Import required dependencies
require('dotenv').config();
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

async function createAdmin() {
  try {
    console.log('🚀 Connecting to PostgreSQL...');
    
    // Create a connection pool
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    
    // Connect to the database
    const client = await pool.connect();
    console.log('Connected to database');
    
    // Check if users table exists
    const tablesResult = await client.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'users'
      );
    `);
    
    if (!tablesResult.rows[0].exists) {
      console.log('Creating users table...');
      
      // Create users table if it doesn't exist
      await client.query(`
        CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          first_name VARCHAR(255),
          last_name VARCHAR(255),
          role VARCHAR(50) NOT NULL DEFAULT 'user',
          created_at TIMESTAMP NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMP NOT NULL DEFAULT NOW()
        );
      `);
      console.log('Users table created.');
    }
    
    // Check if admin user already exists
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@futureshift.org';
    const userResult = await client.query(
      'SELECT * FROM users WHERE email = $1',
      [adminEmail]
    );
    
    if (userResult.rows.length > 0) {
      console.log(`Admin user with email ${adminEmail} already exists.`);
    } else {
      // Create password hash
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(
        process.env.ADMIN_PASSWORD || 'Admin123!', 
        salt
      );
      
      // Insert admin user
      await client.query(
        'INSERT INTO users (email, password, first_name, last_name, role) VALUES ($1, $2, $3, $4, $5)',
        [
          adminEmail,
          hashedPassword,
          process.env.ADMIN_FIRSTNAME || 'Admin',
          process.env.ADMIN_LASTNAME || 'User',
          'admin'
        ]
      );
      
      console.log(`✅ Admin user created successfully with email: ${adminEmail}`);
    }
    
    // Close the connection
    client.release();
    await pool.end();
    
    console.log('Database connection closed');
    console.log(`\nYou can now log in at: ${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/admin`);
  } catch (error) {
    console.error('❌ Error creating admin user:', error);
  }
  
  process.exit(0);
}

createAdmin(); 