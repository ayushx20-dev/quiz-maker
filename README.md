# Online Quiz Maker - MERN Stack

A complete Full Stack Online Quiz Maker application built with MongoDB, Express, React, and Node.js.

## Project Structure

```
quiz-maker/
├── server/                 # Backend (Node.js + Express)
│   ├── config/
│   │   └── db.js          # MongoDB connection
│   ├── controllers/        # Route handlers
│   │   ├── authController.js
│   │   └── quizController.js
│   ├── middleware/        # Custom middleware
│   │   └── authMiddleware.js
│   ├── models/            # MongoDB schemas
│   │   ├── User.js
│   │   ├── Quiz.js
│   │   └── Attempt.js
│   ├── routes/            # API routes
│   │   ├── authRoutes.js
│   │   └── quizRoutes.js
│   ├── server.js          # Express app entry point
│   ├── package.json
│   └── .env               # Environment variables
│
└── client/                # Frontend (React + Vite)
    ├── src/
    │   ├── api/
    │   │   └── axios.js   # Axios configuration
    │   ├── pages/         # Page components
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── QuizList.jsx
    │   │   ├── TakeQuiz.jsx
    │   │   ├── Results.jsx
    │   │   └── CreateQuiz.jsx
    │   ├── components/    # Reusable components
    │   ├── context/       # React context
    │   ├── App.jsx        # Main app component
    │   ├── main.jsx       # Entry point
    │   └── index.css      # Global styles
    ├── vite.config.js     # Vite configuration
    ├── index.html         # HTML template
    ├── package.json
    └── .gitignore
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas)

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in `.env`:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will run on `http://localhost:5173` (or another available port)

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Quizzes
- `GET /api/quizzes` - Get all quizzes
- `GET /api/quizzes/:id` - Get a specific quiz
- `POST /api/quizzes` - Create a new quiz (requires authentication)

## Features

### Implemented
- ✅ User registration and login
- ✅ JWT authentication
- ✅ Quiz browsing
- ✅ Quiz taking with real-time scoring
- ✅ Results display
- ✅ Responsive UI with Tailwind CSS
- ✅ Error handling

### Coming Soon
- 🔄 Edit and delete quizzes
- 🔄 Quiz creation interface
- 🔄 User dashboard
- 🔄 Attempt history
- 🔄 Quiz timer
- 🔄 Leaderboard
- 🔄 Dark mode
- 🔄 Advanced search and filters

## Tech Stack

### Backend
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Nodemon** - Auto-reload development

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **React Router** - Routing
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **React Hot Toast** - Notifications

## Environment Variables

### Backend (.env)
```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your_secret_key
```

### Frontend
The frontend connects to the backend via the API base URL configured in `src/api/axios.js`

## Running Both Servers

### Option 1: Separate Terminals
- Terminal 1: `cd server && npm run dev`
- Terminal 2: `cd client && npm run dev`

### Option 2: Concurrently (requires setup)
Install `concurrently` in root directory and configure scripts.

## Deployment

### Frontend
Deploy to Vercel, Netlify, or GitHub Pages:
```bash
npm run build
```

### Backend
Deploy to Render, Heroku, or Railway:
```bash
npm start
```

## MongoDB Atlas Setup

1. Create a free account at [mongodb.com](https://www.mongodb.com)
2. Create a cluster
3. Get your connection string
4. Add it to `.env` as `MONGO_URI`

## Common Issues

### CORS Error
Make sure the backend has CORS enabled and the frontend URL is allowed.

### Connection String Error
Verify your MongoDB connection string and ensure your IP is whitelisted in MongoDB Atlas.

### Port Already in Use
Change the PORT in `.env` or use `lsof -i :5000` to find and kill the process.

## Future Enhancements

- Real-time notifications using Socket.io
- Quiz categories and tags
- Advanced analytics
- Social sharing
- Mobile app version
- Payment integration for premium features

## License

MIT License

## Support

For issues or questions, please create an issue in the repository.
