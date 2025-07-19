const express = require('express');
const {Pool} = require('pg');

const app = express();
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mydb',
  password: 'mysecretpassword',
  port: 5432,
});

//testing db connection on startup
pool.connect()
  .then(client => {
    console.log('connected to postgreSQL database');
    client.release();
  })
  .catch(err => {
    console.error('Database connection error: ', err.stack);
    process.exit(1);
  })

//CREATE
app.post('/users', async (req, res) => {
  const {name, email} = req.body;
  const result = await pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email]
  );
  res.json(result.rows[0])
});

//READ
app.get('/users', async(req, res) => {
  const result = await pool.query(
    'SELECT * FROM users'
  );
  res.json(result.rows);
})

//UPDATE
app.put('/users/:id', async(req, res) => {
  const {id} = req.params;
  const{name, email} = req.body;
  const result = await pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
    [name, email, id]
  );
  res.json(result.rows[0]);
});

//DELETE
app.delete('/users/:id', async(req, res) => {
  const {id} = req.params;
  await pool.query('DELETE FROM users WHERE id = $1', [id]);
  res.sendStatus(204);
});

app.listen(3000, ()=> {
  console.log('server running on port 3000')
})