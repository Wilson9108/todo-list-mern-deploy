require('dotenv').config()
let {dbConnect} = require('./config/dbConnect')
dbConnect("mongodb://127.0.0.1:27017/todo")
let {userRouter}  = require('./routers/user')
let {port} = process.env
let express = require('express')
let app = express()
let cors = require('cors')
app.use(express.json())
app.use(cors())
app.use('/api/user',userRouter)

app.listen(port,()=>console.log(`Your port is running on ${port}`))