require('dotenv').config()
const express = require('express')
const app = express()

const Note = require('./models/note')

const items = [
  {
    id: '1',
    name: 'Microsoft',
    number: '7747',
  },
  {
    id: '2',
    name: 'Google',
    number: '8841',
  },
  {
    id: '3',
    name: 'Tesla',
    number: '6363',
  },
  {
    id: '4',
    name: 'Apple',
    number: '0011',
  },
]

// 列出所有条目
app.get('/items', (request, response)=>{
  console.log(process.argv[2])
  return response.json(items)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Todo Server running on port ${PORT}`)
})