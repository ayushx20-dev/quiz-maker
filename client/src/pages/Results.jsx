import { useLocation, Link } from 'react-router-dom'

function Results() {
  const { state } = useLocation()

  if (!state) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center'>
        <p className='text-xl text-gray-500'>No results to display</p>
        <Link to='/quizzes' className='mt-4 text-blue-500'>Back to Quizzes</Link>
      </div>
    )
  }

  const { score, total } = state
  const percentage = Math.round((score / total) * 100)

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-6'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold mb-4'>Quiz Results</h1>

        <div className='text-6xl font-bold mb-4 text-blue-600'>{percentage}%</div>

        <p className='text-3xl mb-2'>
          Score: <span className='font-bold'>{score}/{total}</span>
        </p>

        {percentage >= 80 && <p className='text-xl text-green-600 font-semibold'>Excellent!</p>}
        {percentage >= 60 && percentage < 80 && <p className='text-xl text-yellow-600 font-semibold'>Good Job!</p>}
        {percentage < 60 && <p className='text-xl text-orange-600 font-semibold'>Keep Practicing!</p>}
      </div>

      <div className='flex gap-4'>
        <Link to='/quizzes'>
          <button className='bg-black text-white px-6 py-3 rounded-lg'>
            Take Another Quiz
          </button>
        </Link>

        <Link to='/'>
          <button className='border px-6 py-3 rounded-lg'>
            Go Home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Results
