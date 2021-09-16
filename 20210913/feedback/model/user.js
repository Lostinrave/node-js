const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const userScheme=new mongoose.Schema({
    email:{
        type:String,
        trim:true,
        required:true,
        lowercase:true,
        unique:true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('El paštas neteisingas');
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error('Slaptažodis per silpnas');
            }
        }
    },
    tokens:[{
        token:{
        type:String,
        required:true
        }
    }]
});

userScheme.statics.findByEmail=async function (email,password){
    const user=await User.findOne({email});
    if(!user){
        throw new Error("Neteisingi duomenys");
    }
    //Tikriname ar passwordas ivestas atitinka passworda duomenu bazeje
    const e=await bcrypt.compare(password, user.password);
    if(!e){
        throw new Error("Neteisingi duomenys");
    }
    return user;
};

userScheme.methods.generateAuthToken=async function(){
    const user=this;
    const token=jwt.sign({_id:user._id.toString()},'kz585++64');
    user.tokens=user.tokens.concat({token});
    await user.save();
    return token;
}

userScheme.pre('save', async function(next){
    const user=this;
    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,10);
    }
    // console.log("Vykdau save middleware");
    // console.log(this.email);
    next();
});

const User=mongoose.model('User',  userScheme);

module.exports=User;