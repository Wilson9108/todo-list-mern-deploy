const app = require('./app')
require('dotenv').config()
let {dbConnect} = require('./config/dbConnect')
dbConnect("mongodb://127.0.0.1:27017/todo")
function getName(name){
    return name
}
let {port} = process.env
app.listen(port,()=>console.log(`Your port is running on ${port}`))