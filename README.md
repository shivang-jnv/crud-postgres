# Simple CRUD App

This is a basic Node.js CRUD API using Express and PostgreSQL.

## Features

- Create a user
- Read all users
- Update a user
- Delete a user

## Prerequisites

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- npm (comes with Node.js)
- [Postman](https://www.postman.com/)
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
   npm run dev
   ```

## Testing the API with Postman

1. **Open Postman** and create a new request.

2. **Set the request type and URL:**

   - URL: `http://localhost:3000/users`

3. **API Endpoints:**

   ### Create a User

   - **Method:** POST
   - **URL:** `http://localhost:3000/users`
   - **Body:** Select `raw` and `JSON`, then enter:
     ```json
     {
       "name": "Alice",
       "email": "alice@example.com"
     }
     ```

   ### Get All Users

   - **Method:** GET
   - **URL:** `http://localhost:3000/users`

   ### Update a User

   - **Method:** PUT
   - **URL:** `http://localhost:3000/users/1`
   - **Body:** Select `raw` and `JSON`, then enter:
     ```json
     {
       "name": "Bob",
       "email": "bob@example.com"
     }
     ```

   ### Delete a User

   - **Method:** DELETE
   - **URL:** `http://localhost:3000/users/1`

4. **Send the request** and check the response in Postman.
