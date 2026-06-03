const Quiz = require('../models/Quiz')
const mockDB = require('../config/mockDB')

const useMockDB = process.env.USE_MOCK_DB !== 'false'

const createQuiz = async (req, res) => {
  try {
    let quiz
    if (useMockDB) {
      quiz = mockDB.quizzes.create({
        ...req.body,
        createdBy: req.user.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    } else {
      quiz = await Quiz.create({
        ...req.body,
        createdBy: req.user.id,
      })
    }

    res.status(201).json(quiz)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getQuizzes = async (req, res) => {
  try {
    let quizzes
    if (useMockDB) {
      quizzes = mockDB.quizzes.find()
    } else {
      quizzes = await Quiz.find().populate('createdBy', 'username')
    }
    res.json(quizzes)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getQuiz = async (req, res) => {
  try {
    let quiz
    if (useMockDB) {
      quiz = mockDB.quizzes.findById(req.params.id)
    } else {
      quiz = await Quiz.findById(req.params.id)
    }
    res.json(quiz)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  createQuiz,
  getQuizzes,
  getQuiz,
}
