import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import API from '../api/axios'

function TakeQuiz() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [quiz, setQuiz] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchQuiz()
  }, [])

  const fetchQuiz = async () => {
    try {
      const { data } = await API.get(`/quizzes/${id}`)
      setQuiz(data)
    } catch (error) {
      setError('Failed to load quiz')
    } finally {
      setLoading(false)
    }
  }

  const handleAnswer = (option) => {
    if (option === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion + 1 < quiz.questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      navigate('/results', {
        state: {
          score: score + (option === quiz.questions[currentQuestion].correctAnswer ? 1 : 0),
          total: quiz.questions.length,
        },
      })
    }
  }

  if (loading) return <div className='p-6 text-center'>Loading quiz...</div>
  if (error) return <div className='p-6 text-center text-red-500'>{error}</div>
  if (!quiz) return <div className='p-6 text-center'>Quiz not found</div>

  const question = quiz.questions[currentQuestion]

  return (
    <div className='max-w-2xl mx-auto p-6'>
      <div className='mb-6'>
        <h1 className='text-3xl font-bold mb-2'>{quiz.title}</h1>
        <div className='text-sm text-gray-600'>
          Question {currentQuestion + 1} of {quiz.questions.length}
        </div>
        <div className='w-full bg-gray-200 rounded-full h-2 mt-2'>
          <div
            className='bg-black h-2 rounded-full transition-all'
            style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <h2 className='text-2xl font-bold mb-6'>{question.question}</h2>

      <div className='flex flex-col gap-4'>
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className='border p-4 rounded-lg hover:bg-gray-100 text-left font-semibold transition'
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TakeQuiz
