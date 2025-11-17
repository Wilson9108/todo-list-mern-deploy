const mongoose = require('mongoose')
let {dbConnect} = require('../config/dbConnect')

beforeAll(async()=>{
    await dbConnect("mongodb://127.0.0.1:27017/todo_test")
})

afterAll(async ()=>{
    //  await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
})