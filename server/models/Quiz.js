const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    category: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    questions: [
      {
        question: String,
        options: [String],
        correctAnswer: String,
      },
    ],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Quiz', QuizSchema)
