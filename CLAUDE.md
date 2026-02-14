# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a full-stack application with JWT (JSON Web Token) authentication. The project is organized with separate backend and frontend directories:

- `backend/` - Contains server-side code for JWT authentication
- `frontend/` - Contains client-side code that consumes JWT authentication

## Architecture

The project follows a typical full-stack architecture where:
- The backend handles JWT token generation, validation, and user authentication
- The frontend manages user interactions and communicates with the backend via authenticated API calls
- Authentication state is maintained using JWT tokens stored client-side (localStorage/cookies)

## Common Development Tasks

### Backend Development
- Implement JWT authentication endpoints (login, register, refresh token)
- Create middleware for token validation
- Define user models and authentication logic
- Handle password hashing and verification

### Frontend Development
- Create login and registration forms
- Implement token storage and retrieval
- Add authentication guards for protected routes
- Handle token expiration and refresh

## Commands

Since this project is newly initialized, common commands will likely include:

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Initialize Node.js project (if using Node.js)
npm init -y

# Install common dependencies
npm install express jsonwebtoken bcryptjs dotenv cors helmet
npm install -D nodemon
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Initialize React/Vue/Angular project
# Or copy existing frontend template
```

### Running the Application
```bash
# Backend
cd backend && npm run dev

# Frontend
cd frontend && npm start
```

## Security Considerations

- Secure JWT secret management using environment variables
- Proper token expiration and refresh mechanisms
- CSRF protection when applicable
- HTTPS enforcement in production
- Input validation and sanitization