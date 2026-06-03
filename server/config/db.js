const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB Connected')
  } catch (error) {
    console.log('MongoDB Connection Error:', error.message)
    console.log('Running in development mode without persistent storage')
    // Don't exit - allow server to run without DB for development
  }
}

module.exports = connectDB
