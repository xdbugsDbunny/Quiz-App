import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    phone: String,
    password: String,
})

const User = mongoose.model('users',userSchema)

export default User;