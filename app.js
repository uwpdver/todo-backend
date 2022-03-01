const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const middleware = require('./middleware')
const config = require('./utils/config')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

const todoRouter = require('./controllers/todo')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
  .then(() => logger.info('connected to MongoDB success'))
  .catch((error) => logger.info('error connecting to MongoDB:', error.message))

const app = express()
require('express-async-errors')
app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.use('/api/items', todoRouter)

app.use(middleware.errorHandler)

module.exports = app