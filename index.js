require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('build'))

const Note = require('./models').Note;

// 列出所有条目
app.get('/api/items', (request, response) => {
  const { keyword = '' } = request.query
  Note.find({ content: { $regex: keyword } })
    .then((result) => {
      return response.json({
        message: 'success',
        data: result
      })
    })
    .catch(err => {
      console.log(err)
    })
})

// 查询单个条目
app.get('/api/items/:id', (request, response) => {
  const { id } = request.params
  Note.findById(id)
    .then((result) => {
      return response.json({
        message: 'success',
        data: result
      })
    })
    .catch(err => {
      console.log(err)
    })
})

// 创建新条目
app.post('/api/items', (request, response) => {
  const { content } = request.body
  var id = mongoose.Types.ObjectId();
  const note = new Note({
    id: id,
    content: content,
    date: new Date(),
    important: false,
    isCompleted: false,
  })

  note.save()
    .then(result => {
      return response.json({
        message: 'create success',
        data: result
      })
    })
    .catch(err => {
      console.log(err)
    })
})

// 修改重要性
app.patch('/api/items/:id/important', (request, response) => {
  const { important } = request.body
  const { id } = request.params
  Note.findByIdAndUpdate(id, { important: important })
    .then((result) => {
      return response.json({
        message: 'update success',
        data: result
      })
    })
    .catch(err => {
      console.log(err)
    })
})

// 修改完成状态
app.patch('/api/items/:id/isCompleted', (request, response) => {
  const { isCompleted } = request.body
  const { id } = request.params
  Note.findByIdAndUpdate(id, { isCompleted: isCompleted })
    .then((result) => {
      return response.json({
        message: 'update success',
        data: result
      })
    })
    .catch(err => {
      console.log(err)
    })
})

// 删除条目
app.delete('/api/items/:id', (request, response) => {
  const { id } = request.params
  Note.findByIdAndDelete(id)
    .then((result) => {
      return response.json({
        message: 'delete success',
        data: result
      })
    })
    .catch(err => {
      console.log(err)
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Todo Server running on port ${PORT}`)
})