const errorHandler = (error, request, response, next) => {
  console.log(error.message)
  
  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  }
  
  next();
}

module.exports = errorHandler;