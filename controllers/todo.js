const todoRouter = require('express').Router()
const mongoose = require('mongoose')
const Todo = require('../models').Todo

// 列出所有条目
todoRouter.get('/', (request, response, next) => {
  const { keyword = '' } = request.query
  Todo.find({ content: { $regex: keyword } })
    .then((result) => response.json({ message: 'success', data: result }))
    .catch(error => next(error))
})

// 查询单个条目
todoRouter.get('/:id', (request, response, next) => {
  const { id } = request.params
  Todo.findById(id)
    .then((result) => {
      if (result) {
        response.json({ message: 'success', data: result })
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

// 创建新条目
todoRouter.post('', (request, response, next) => {
  const { content } = request.body
  var id = mongoose.Types.ObjectId()
  const todo = new Todo({
    id: id,
    content: content,
    date: new Date(),
    important: false,
    isCompleted: false,
  })

  todo.save()
    .then(result => response.json({ message: 'create success', data: result }))
    .catch(error => next(error))
})

// 修改重要性
todoRouter.patch('/:id/important', (request, response, next) => {
  const { important } = request.body
  const { id } = request.params
  Todo.findByIdAndUpdate(id, { important: important })
    .then(result => response.json({ message: 'update success', data: result }))
    .catch(error => next(error))
})

// 修改完成状态
todoRouter.patch('/:id/isCompleted', (request, response, next) => {
  const { isCompleted } = request.body
  const { id } = request.params
  Todo.findByIdAndUpdate(id, { isCompleted: isCompleted })
    .then(result => response.json({ message: 'update success', data: result }))
    .catch(error => next(error))
})

// 删除条目
todoRouter.delete('/:id', (request, response, next) => {
  const { id } = request.params
  Todo.findByIdAndDelete(id)
    .then(result => response.json({ message: 'delete success', data: result }))
    .catch(error => next(error))
})

module.exports = todoRouter