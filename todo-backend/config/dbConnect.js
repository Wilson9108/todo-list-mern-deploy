let mongoose = require('mongoose')

async function dbConnect(url){
    try{
        await mongoose.connect(url)
        console.log("database connected")
    }catch(e){
        console.error(e.message)
    }
}

module.exports={dbConnect}