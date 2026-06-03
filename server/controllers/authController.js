const User = require('../models/User')
const mockDB = require('../config/mockDB')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const useMockDB = process.env.USE_MOCK_DB !== 'false'

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body

    let existingUser
    if (useMockDB) {
      existingUser = mockDB.users.findOne({ email })
    } else {
      existingUser = await User.findOne({ email })
    }

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    let user
    if (useMockDB) {
      user = mockDB.users.create({
        username,
        email,
        password: hashedPassword,
      })
    } else {
      user = await User.create({
        username,
        email,
        password: hashedPassword,
      })
    }

    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body

    let user
    if (useMockDB) {
      user = mockDB.users.findOne({ email })
    } else {
      user = await User.findOne({ email })
    }

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
      }
    )

    res.json({
      token,
      user,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  register,
  login,
}
