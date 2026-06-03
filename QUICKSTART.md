# Quick Start Guide

## Prerequisites
- Node.js v16+ installed
- npm or yarn package manager
- MongoDB (local or MongoDB Atlas account)

## 1. Backend Setup

### Step 1: Navigate to backend directory
```bash
cd server
```

### Step 2: Install dependencies
```bash
npm install
```

### Step 3: Configure MongoDB
1. Create a MongoDB database (local or MongoDB Atlas)
2. Copy `.env.example` to `.env`
3. Update `MONGO_URI` with your MongoDB connection string
4. Generate a strong JWT_SECRET:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```
   Copy the output and paste it in `.env` as JWT_SECRET

### Step 4: Start backend server
```bash
npm run dev
```

The server should start on `http://localhost:5000`

---

## 2. Frontend Setup

### Step 1: Navigate to frontend directory (new terminal)
```bash
cd client
```

### Step 2: Install dependencies
```bash
npm install
```

### Step 3: Start frontend development server
```bash
npm run dev
```

The frontend should start on `http://localhost:5173` (or the next available port)

---

## 3. Access the Application

Open your browser and go to:
```
http://localhost:5173
```

---

## Testing the Application

### 1. Create Account
- Click "Register"
- Fill in username, email, and password
- Submit the form

### 2. Login
- Click "Login"
- Use your credentials
- You'll be redirected to home

### 3. Browse Quizzes
- Click "Take Quiz"
- View available quizzes (initially empty)

### 4. Create Test Data (Backend)
You can use the API directly or use a tool like Postman:

**Create a sample quiz:**
```bash
POST http://localhost:5000/api/quizzes
Authorization: Bearer {your_jwt_token}

{
  "title": "JavaScript Basics",
  "description": "Test your JavaScript knowledge",
  "category": "Programming",
  "questions": [
    {
      "question": "What is the output of console.log(typeof null)?",
      "options": ["null", "object", "undefined", "error"],
      "correctAnswer": "object"
    },
    {
      "question": "What is the difference between let and var?",
      "options": ["No difference", "Scope and hoisting", "Performance", "None"],
      "correctAnswer": "Scope and hoisting"
    }
  ]
}
```

---

## MongoDB Atlas Setup (if using cloud)

1. Go to [mongodb.com](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a cluster
4. Create a database user
5. Whitelist your IP address
6. Get your connection string
7. Replace the placeholder in `.env`:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/quiz-maker
   ```

---

## Troubleshooting

### Backend won't start
- Check if port 5000 is in use: `lsof -i :5000`
- Verify MongoDB connection string
- Check `.env` file exists and has correct values

### Frontend won't start
- Delete `node_modules` and `package-lock.json`, then run `npm install` again
- Check if port 5173 is available

### CORS Error
- Make sure backend is running on `http://localhost:5000`
- Frontend API URL should match in `src/api/axios.js`

### MongoDB Connection Error
- Test connection: `mongodb+srv://user:pass@cluster.mongodb.net/`
- Ensure IP address is whitelisted in MongoDB Atlas
- Check credentials are correct

---

## Project Features

✅ User Authentication (Register/Login with JWT)
✅ Quiz Management (Create, Read)
✅ Quiz Taking with Real-time Scoring
✅ Results Display
✅ Responsive Design with Tailwind CSS

Coming Soon:
🔄 Quiz Editing & Deletion
🔄 Quiz Creation UI
🔄 User Dashboard
🔄 Quiz Timer
🔄 Leaderboard
🔄 Dark Mode

---

## Running in Production

### Build Frontend
```bash
cd client
npm run build
```

### Deploy
- **Frontend**: Deploy `dist` folder to Vercel, Netlify, or GitHub Pages
- **Backend**: Deploy to Render, Railway, or Heroku

---

## Next Steps

1. Implement the Create Quiz page UI
2. Add quiz editing and deletion
3. Create a user dashboard
4. Add quiz timer functionality
5. Implement attempt history tracking

---

For more details, see [README.md](../README.md)
