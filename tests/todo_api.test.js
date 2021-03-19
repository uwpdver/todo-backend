const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

const Todo = require('../models/todo')

const initialTodos = [
  {
    content: 'PHP is the best language in the world',
    id: '123',
    isCompleted: false,
    date: new Date(),
  },
  {
    content: 'I not give a fuck about your shit',
    id: '456',
    isCompleted: true,
    date: new Date(),
  }
]

beforeEach(async () => {
  await Todo.deleteMany({})
  let todoObject = new Todo(initialTodos[0])
  await todoObject.save()
  todoObject = new Todo(initialTodos[1])
  await todoObject.save()
})

test('todo are returned as json', async () => {
  await api
    .get('/api/items')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('todo are returned list have length', async () => {
  const response = await api.get('/api/items')
  expect(response.body.data).toHaveLength(initialTodos.length)
})

test('a specific todo content is within the response todos', async () => {
  const response = await api.get('/api/items')
  const contents = response.body.data.map(todo => todo.content)

  expect(contents).toContain('PHP is the best language in the world')
})

afterAll(() => {
  mongoose.connection.close()
})