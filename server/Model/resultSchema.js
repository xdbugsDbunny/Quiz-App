import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    username : String,
    result : { type : Array, default : []},
    attempts : { type : Number, default : 0},
    points : { type : Number, default : 0},
    achived : { type : String, default : ''},
    createdAt : { type : Date, default : Date.now}
})

const Result = mongoose.model('result', resultSchema);

export default Result