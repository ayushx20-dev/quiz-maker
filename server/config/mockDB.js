// In-memory mock database for development/testing
let users = [];
let quizzes = [];
let attempts = [];

let userIdCounter = 1;
let quizIdCounter = 1;
let attemptIdCounter = 1;

const mockDB = {
  // User operations
  users: {
    create: (data) => {
      const user = { _id: userIdCounter++, ...data };
      users.push(user);
      return user;
    },
    findOne: (query) => {
      return users.find(u => 
        (query.email && u.email === query.email) ||
        (query._id && u._id === query._id)
      );
    },
  },

  // Quiz operations
  quizzes: {
    create: (data) => {
      const quiz = { _id: quizIdCounter++, ...data };
      quizzes.push(quiz);
      return quiz;
    },
    find: () => {
      return quizzes.map(q => ({
        ...q,
        createdBy: users.find(u => u._id === q.createdBy) || null
      }));
    },
    findById: (id) => {
      return quizzes.find(q => q._id == id);
    },
  },

  // Attempt operations
  attempts: {
    create: (data) => {
      const attempt = { _id: attemptIdCounter++, ...data };
      attempts.push(attempt);
      return attempt;
    },
    find: (query) => {
      return attempts.filter(a =>
        (query.userId && a.userId === query.userId) ||
        (query.quizId && a.quizId === query.quizId)
      );
    },
  },

  // Reset for testing
  reset: () => {
    users = [];
    quizzes = [];
    attempts = [];
    userIdCounter = 1;
    quizIdCounter = 1;
    attemptIdCounter = 1;
  },

  // Seed demo data
  seed: () => {
    // Create demo user
    users.push({
      _id: userIdCounter++,
      username: 'demo',
      email: 'demo@example.com',
      password: '$2a$10$dXJ3SW6G7P50eS3UNKzI3OPST9/PgBkqquzi.Ss7KIUgO2t0jWMUW', // hashed "password"
    });

    // Create demo quizzes
    quizzes.push({
      _id: quizIdCounter++,
      title: 'JavaScript Basics',
      description: 'Test your JavaScript fundamentals',
      category: 'Programming',
      createdBy: 1,
      questions: [
        {
          question: 'What is the output of console.log(typeof null)?',
          options: ['null', 'object', 'undefined', 'error'],
          correctAnswer: 'object',
        },
        {
          question: 'Which keyword creates a block-scoped variable?',
          options: ['var', 'let', 'const', 'both let and const'],
          correctAnswer: 'both let and const',
        },
        {
          question: 'What does "this" refer to in a regular function?',
          options: ['The function itself', 'The window/global object', 'undefined', 'The parent object'],
          correctAnswer: 'The window/global object',
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    quizzes.push({
      _id: quizIdCounter++,
      title: 'World Capitals',
      description: 'Test your geography knowledge',
      category: 'Geography',
      createdBy: 1,
      questions: [
        {
          question: 'What is the capital of France?',
          options: ['London', 'Berlin', 'Paris', 'Madrid'],
          correctAnswer: 'Paris',
        },
        {
          question: 'What is the capital of Japan?',
          options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'],
          correctAnswer: 'Tokyo',
        },
        {
          question: 'What is the capital of Australia?',
          options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
          correctAnswer: 'Canberra',
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    quizzes.push({
      _id: quizIdCounter++,
      title: 'React Fundamentals',
      description: 'Test your React knowledge',
      category: 'Programming',
      createdBy: 1,
      questions: [
        {
          question: 'What does JSX stand for?',
          options: ['JavaScript XML', 'JavaScript Extra', 'Java Syntax Extension', 'jQuery XML'],
          correctAnswer: 'JavaScript XML',
        },
        {
          question: 'Which hook is used to manage state in functional components?',
          options: ['useEffect', 'useState', 'useContext', 'useReducer'],
          correctAnswer: 'useState',
        },
        {
          question: 'What is the virtual DOM in React?',
          options: ['A real DOM', 'A JavaScript representation of the actual DOM', 'A CSS framework', 'A library'],
          correctAnswer: 'A JavaScript representation of the actual DOM',
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  },
};

// Seed demo data on startup
mockDB.seed();

module.exports = mockDB;
