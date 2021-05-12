require('dotenv').config()

const PORT = process.env.PORT || 3777
const MONGODB_URL = process.env.MONGODB_URI

module.exports = {
  MONGODB_URL,
  PORT,
}