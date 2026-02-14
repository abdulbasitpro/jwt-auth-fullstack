# JWT Authentication System

A full-stack authentication system built with React (frontend), Express (backend), and MongoDB (database) using JWT for authentication and bcrypt for password hashing.

## Features

- User registration with password hashing using bcrypt
- User login with JWT token generation
- Protected dashboard route that requires authentication
- Token verification middleware on backend
- Automatic token inclusion in frontend requests
- Responsive UI with Tailwind CSS

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, React Router, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Styling**: Tailwind CSS 3.4.17

## Project Structure

```
JWT/
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── controllers/
│   │   └── authController.js
│   ├── routes/
│   │   └── auth.js
│   ├── middleware/
│   │   └── auth.js
│   ├── config/
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   │   └── Navbar.jsx
    │   ├── pages/
    │   │   ├── Register.jsx
    │   │   ├── Login.jsx
    │   │   └── Dashboard.jsx
    │   ├── contexts/
    │   │   └── AuthContext.jsx
    │   ├── utils/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── package.json
    ├── vite.config.js
    └── tailwind.config.js
```

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory with the following content:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/authdb
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
NODE_ENV=development
```

4. Start the backend server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend development server:
```bash
npm run dev
```

## API Endpoints

### Authentication Routes

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get JWT token
- `GET /api/auth/profile` - Get user profile (requires valid JWT token)

### Response Format

Successful responses follow this format:
```json
{
  "success": true,
  "message": "Operation successful",
  "token": "JWT token",
  "user": {
    "_id": "user id",
    "name": "user name",
    "email": "user email",
    "createdAt": "timestamp"
  }
}
```

Failed responses follow this format:
```json
{
  "success": false,
  "message": "Error message"
}
```

## Security Features

- Passwords are hashed using bcrypt before storing in the database
- JWT tokens are used for authentication
- Token expiration is configured (7 days by default)
- Authentication middleware protects sensitive routes
- CORS and Helmet middleware for additional security

## Environment Variables

Create a `.env` file in the backend directory with the following variables:

- `PORT`: Port number for the server (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for signing JWT tokens
- `JWT_EXPIRE`: Token expiration time (e.g., '7d' for 7 days)

## Running the Application

1. Make sure MongoDB is running on your system
2. Start the backend server: `cd backend && npm run dev`
3. Start the frontend server: `cd frontend && npm run dev`
4. Open your browser and go to `http://localhost:5173`

## Development Notes

- The frontend connects to the backend API at `http://localhost:5000`
- JWT tokens are stored in localStorage and automatically included in requests
- The dashboard page is protected and only accessible when authenticated
- Password validation requires a minimum of 6 characters