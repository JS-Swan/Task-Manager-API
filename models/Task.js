const mongoose=require('mongoose')

const TaskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provie a name'],
        trim:true,
        maxlength:[20,'max len 20'],

    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('Task',TaskSchema)