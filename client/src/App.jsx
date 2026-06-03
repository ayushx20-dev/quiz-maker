import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import CreateQuiz from './pages/CreateQuiz'
import QuizList from './pages/QuizList'
import TakeQuiz from './pages/TakeQuiz'
import Results from './pages/Results'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create' element={<CreateQuiz />} />
        <Route path='/quizzes' element={<QuizList />} />
        <Route path='/quiz/:id' element={<TakeQuiz />} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
