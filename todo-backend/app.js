
let express = require('express')
let {userRouter}  = require('./routers/user')
let app = express()
let cors = require('cors')
app.use(express.json())
app.use(cors())
app.use('/api/user',userRouter)


module.exports=app