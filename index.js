require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const Note = require('./models/note')
console.log(Note);

// 列出所有条目
app.get('/items', (request, response) => {
  Note.find({})
    .then((result) => {
      result.forEach(note => {
        console.log(note)
      })
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
app.get('/items/:id', (request, response) => {
  const { id } = request.params
  Note.findById(id)
    .then((result) => {
      console.log(result)
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
app.post('/items', (request, response) => {
  const { content } = request.body
  console.log(`content: ${content}`)
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
      console.log('note saved!', result)
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
app.patch('/items/:id/important', (request, response) => {
  const { important } = request.body
  const { id } = request.params
  console.log(important, id)
  Note.findByIdAndUpdate(id, { important: important })
    .then((result) => {
      console.log(result)
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
app.patch('/items/:id/isCompleted', (request, response) => {
  const { isCompleted } = request.body
  const { id } = request.params
  console.log(isCompleted, id)
  Note.findByIdAndUpdate(id, { isCompleted: isCompleted })
    .then((result) => {
      console.log(result)
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
app.delete('/items/:id', (request, response) => {
  const { id } = request.params
  Note.findByIdAndDelete(id)
    .then((result) => {
      console.log(result)
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