import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-4'>
      <h1 className='text-5xl font-bold'>Online Quiz Maker</h1>

      <div className='flex gap-4'>
        <Link to='/create'>
          <button className='bg-black text-white px-6 py-3 rounded-lg'>
            Create Quiz
          </button>
        </Link>

        <Link to='/quizzes'>
          <button className='border px-6 py-3 rounded-lg'>
            Take Quiz
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
