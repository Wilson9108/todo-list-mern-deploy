let express = require('express')
let userRouter = express.Router()
let {createTask,getTasks,deleteTask,updateTask,getPendingTasks,getCompletedTasks,completeTask} = require('../controller/user')


userRouter.get('/',getTasks)
userRouter.get('/pending',getPendingTasks)
userRouter.get('/completed',getCompletedTasks)
userRouter.post('/create',createTask)
userRouter.put('/update/task/:id',updateTask)
userRouter.put('/complete/task/:id',completeTask)
userRouter.delete('/delete/task/:id',deleteTask)








module.exports={userRouter}