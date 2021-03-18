const errorHandler = (error, request, response, next) => {
  console.log(error.message)
  
  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  }else if (error.name === 'ValidationError') {
    return response.status(400).send({ error: error.message })
  }
  
  next();
}

module.exports = errorHandler;