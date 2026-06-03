const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware')

const {
  createQuiz,
  getQuizzes,
  getQuiz,
} = require('../controllers/quizController')

router.get('/', getQuizzes)
router.get('/:id', getQuiz)
router.post('/', authMiddleware, createQuiz)

module.exports = router
