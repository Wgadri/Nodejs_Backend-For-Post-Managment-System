# Node.js Backend

A simple Express + MongoDB backend for authentication and post management system.

## Features

- User registration
- User login
- User logout
- Create posts
- Read posts
- Update posts
- Delete posts

## Tech Stack

- Node.js
- Express
- MongoDB with Mongoose
- JWT-ready auth structure
- dotenv for environment configuration

## Project Structure

```bash
Nodejs_Backend/
├── config/
│   └── database.js
├── controllers/
│   ├── authController.js
│   └── postController.js
├── models/
│   ├── Post.js
│   └── User.js
├── routers/
│   ├── authRoutes.js
│   └── postRoutes.js
├── .env.example
├── .gitignore
├── package.json
├── README.md
├── Server.js
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a local `.env` file from the example:

```bash
copy .env.example .env
```

3. Update the MongoDB connection string in `.env` if needed.

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/nodejs_backend
```

## Run the app

```bash
npm start
```

The server will run on:

```bash
http://localhost:5000
```

## API Routes

### Auth

- `POST /api/register`
- `POST /api/login`
- `POST /api/logout`

### Posts

- `POST /api/post/create`
- `GET /api/post/getPost`
- `PUT /api/post/updatePost/:id`
- `DELETE /api/post/deletePost/:id`

## Notes

- The real `.env` file is intentionally ignored by Git.

## Author 
- Gadri Wisdom