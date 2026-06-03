import { useEffect, useState } from 'react'
import API from '../api/axios'
import { Link } from 'react-router-dom'

function QuizList() {
  const [quizzes, setQuizzes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchQuizzes()
  }, [])

  const fetchQuizzes = async () => {
    try {
      const { data } = await API.get('/quizzes')
      setQuizzes(data)
    } catch (error) {
      setError('Failed to load quizzes')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div className='p-6 text-center'>Loading quizzes...</div>
  if (error) return <div className='p-6 text-center text-red-500'>{error}</div>

  return (
    <div className='p-6'>
      <h1 className='text-4xl font-bold mb-8'>Available Quizzes</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {quizzes.map((quiz) => (
          <div key={quiz._id} className='border p-4 rounded-lg shadow-md hover:shadow-lg transition'>
            <h2 className='text-2xl font-bold mb-2'>{quiz.title}</h2>
            <p className='text-gray-600 mb-2'>{quiz.description}</p>
            <p className='text-sm text-gray-500 mb-4'>Category: {quiz.category}</p>

            <Link to={`/quiz/${quiz._id}`}>
              <button className='w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800'>
                Start Quiz
              </button>
            </Link>
          </div>
        ))}
      </div>

      {quizzes.length === 0 && (
        <div className='text-center mt-8'>
          <p className='text-gray-500'>No quizzes available yet.</p>
        </div>
      )}
    </div>
  )
}

export default QuizList
