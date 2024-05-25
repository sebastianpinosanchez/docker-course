const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 5000;

// PostgreSQL configuration
const pool = new Pool({
  user: 'user',
  host: 'db',
  database: 'database',
  password: 'password',
  port: 5432,
});

app.get('/api', async (req, res) => {
  try {
    // Connect to the database
    const client = await pool.connect();
    // Query to select data from the users table
    const result = await client.query('SELECT * FROM best_teacher');
    // Release the client back to the pool
    client.release();
    // Send the fetched data as JSON response
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});