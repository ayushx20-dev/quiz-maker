import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../api/axios'

function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await API.post('/auth/register', { username, email, password })
      navigate('/login')
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-full max-w-md border rounded-lg p-8'>
        <h1 className='text-3xl font-bold mb-6'>Register</h1>

        {error && <div className='mb-4 p-4 bg-red-100 text-red-700 rounded'>{error}</div>}

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='border p-3 rounded'
            required
          />

          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border p-3 rounded'
            required
          />

          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border p-3 rounded'
            required
          />

          <button
            type='submit'
            disabled={loading}
            className='bg-black text-white p-3 rounded hover:bg-gray-800 disabled:opacity-50'
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <p className='mt-4 text-center'>
          Already have an account? <a href='/login' className='text-blue-500'>Login</a>
        </p>
      </div>
    </div>
  )
}

export default Register
