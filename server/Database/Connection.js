import mongoose from "mongoose";


mongoose.set('strictQuery',true)

const Connection = async(USERNAME,PASSWORD) =>{
    try {
        await mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@quizapp.d32zlip.mongodb.net/?retryWrites=true&w=majority`,{
            useNewUrlParser: true,
            useUnifiedTopology:true
        })
        console.log("Database Connected")
    } catch (error) {
        console.log("Connection Error : ",error.message)
    }
}

export default Connection