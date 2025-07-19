# Simple CRUD App

This is a basic Node.js CRUD (Create, Read, Update, Delete) API using Express and PostgreSQL.

## Features

- Create a user
- Read all users
- Update a user
- Delete a user

## Prerequisites

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- npm (comes with Node.js)
- A PostgreSQL database named `mydb` with a `users` table:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Setup

1. Clone this repository or copy the project files.
2. Install dependencies:

   ```sh
   npm install
   ```

3. Update database credentials in `app.js` if needed.

4. Start the server:

   ```sh
   node app.js
   ```

## API Endpoints

| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| POST   | `/users`         | Create a new user   |
| GET    | `/users`         | Get all users       |
| PUT    | `/users/:id`     | Update a user       |
| DELETE | `/users/:id`     | Delete a user       |

## Example Requests

**Create a user**
```sh
curl -X POST -H "Content-Type: application/json" -d '{"name":"Alice","email":"alice@example.com"}' http://localhost:3000/users
```

**Get all users**
```sh
curl http://localhost:3000/users
```

**Update a user**
```sh
curl -X PUT -H "Content-Type: application/json" -d '{"name":"Bob","email":"bob@example.com"}' http://localhost:3000/users/1
```

**Delete a user**
```sh
curl -X DELETE http://localhost:3000/users/1