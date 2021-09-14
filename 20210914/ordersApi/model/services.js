const mongoose=require('mongoose');
const validator=require('validator');

const Services=mongoose.model('Services',{
    name:{
        type:String,
        required:true,
        trim:true,
        maxLength:160
    },
    description:{
        type:String,
        trim:true,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        trim:true,
        validate(value){
            if (value<0){
                throw new Error("Price can't be a negative number")
            }
        }
    }
});

module.exports=Services;