const mongoose=require('mongoose');
const validator=require('validator');

const Orders=mongoose.model('Orders',{
    service_id:{
        type:String,
        required:true,
        trim:true,
        
    },
    name:{
        type:String,
        trim:true,
        required:true,
        maxLength:24
    },
    surname:{
        type:String,
        required:true,
        trim:true,
        maxLength:24
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        maxLength:32,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('Incorrect email!');
            }
        }
    },
    phone:{
        type:String,
        maxLength:16,
        validate(value){
            if (!validator.isMobilePhone(value)){
                throw new Error('Incorrect phone number!');
            }
        }


    }
});

module.exports=Orders;