const { response } = require("express");

const unknownEndpoint = () => {
  response.status(404).send({error: 'unknown endpoint'});
};

module.exports = unknownEndpoint;