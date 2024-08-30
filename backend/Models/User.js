const mongoose =require('mongoose');


const UserSchema = mongoose.Schema({
    name: {
        type: 'string',
        require: [true, 'Please enter your name'],

    },
    email: {
        type: 'string',
        unique: true,      
        require: [true, 'Please enter your email'],
    },
    password:{
        type: 'string',
        require: [true, 'Please enter your password'],
    },
    // isAdmin:{
    //     type: 'boolean',
    //     require:true,
    //     default: false
    // }
});

const UserModel =mongoose.model('users',UserSchema);
module.exports=UserModel;