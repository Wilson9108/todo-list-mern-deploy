let mongoose = require('mongoose')

let userSchema = mongoose.Schema({
    taskName:{type:String},
    taskDescription:{type:String},
    status:{type:Number,default:0}
})


let user = mongoose.model('users',userSchema)


module.exports={user}