let {user} = require('../models/userModel')


//create task
async function createTask(req,res){
    try{
        let {taskName,taskDescription} =req.body
        let create =await  user.create({taskName,taskDescription})
        if(create){
            res.status(201).json({message:'Task Created Successfully'})
        }else{
            res.status(400).json({message:"Task Not Creation "})
        }
    }catch(_e){
        console.error(e.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}

//update task
async function updateTask(req,res){
    try{
        let {id} = req.params
        let {taskName,taskDescription} = req.body
        let updateTask = await user.findByIdAndUpdate(id,{$set:{taskName,taskDescription}})

        if(updateTask){
            res.status(200).json({message:"Task is Updated"})
        }else{
            res.status(400).json({message:"Task is not updated"})
        }
    }catch(_e){
        res.status(500).json({message:"Internal Server Error"})
    }
}

//update task
async function completeTask(req,res){
    try{
        let {id} = req.params
        let updateTask = await user.findByIdAndUpdate(id,{$set:{status:1}})
        if(updateTask){
            res.status(200).json({message:"Task is completed"})
        }else{
            res.status(400).json({message:"Operation Failed"})
        }
    }catch(_e){
        res.status(500).json({message:"Internal Server Error"})
    }
}

//delete task
async function deleteTask(req,res){
    try{
        let {id} = req.params
        let deleteTask = await user.findByIdAndDelete(id)
        if(deleteTask){
            res.status(200).json({message:"Task is Deleted"})
        }else{
            res.status(400).json({message:"Task is not Deleted"})
        }
    }catch(_e){
        res.status(500).json({message:"Internal Server Error"})
    }
}

//get tasks
async function getTasks(req,res){
    try{
        let tasks = await user.find({}).sort({status:1});
        res.status(200).json(tasks)
    }catch(e){
        res.status(500).json({message:'Internal Server Error'})
    }
}
//get pending tasks
async function getPendingTasks(req,res){
    try{
        let tasks = await user.find({status:0});
        res.status(200).json(tasks)
    }catch(_e){
        res.status(500).json({message:'Internal Server Error'})
    }
}

//get completed tasks
async function getCompletedTasks(req,res){
    try{
        let tasks = await user.find({status:1});
        res.status(200).json(tasks)

    }catch(_e){
        res.status(500).json({message:'Internal Server Error'})
    }
}



module.exports={createTask,getTasks,deleteTask,updateTask,getPendingTasks,getCompletedTasks,completeTask}