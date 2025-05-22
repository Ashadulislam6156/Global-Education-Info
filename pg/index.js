const { Client } = require('pg');

// PostgreSQL connection details
const client = new Client({
  user: 'postgres',            // Username (replace with your actual username)
  host: 'localhost',           // Host is localhost if running locally
  database: 'test',      // Your database name
  password: '1234',     // Your PostgreSQL password
  port: 5432,                  // Default PostgreSQL port
});

// Connect to the database
client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL ✅');

    // Query to fetch all users from 'users' table
    return client.query('select * from users');
  })
  .then(res => {
    // Display all user rows from the 'users' table
    console.log('Users:', res.rows);
  })
  .catch(err => {
    console.error('Error:', err);
  })
  .finally(() => {
    // Close the connection after query execution
    client.end();
  });

fetch('http://localhost:5000/api/users/register', {...})