import Question from "../Model/questionSchema.js";
import Result from "../Model/resultSchema.js";
// import  {questions, answers } from "../Database/data.js";

export const getQuestions = async(req, res)=>{
    try {
        const ques = await Question.find();
        res.json(ques)
    } catch (error) {
        res.json({ error })
    }
}

export const getResult = async(req, res)=>{
    try {
        const result = await Result.find();
        res.json(result)
    } catch (error) {
        res.json({ error })
    }
}

export const storeResult = async(req, res)=>{
    try {
        const oldData = req.body
        const data = new Result(oldData)
        await data.save()

        // Result.insertOne({username, result, attempts, points, achived}, function(err,data){
        // // })
        res.json({msg:"Result Saved Successfully"})
        // res.json(result)
    } catch (error) {
        res.json({ error })
    }
}
// export const insertQuestions = async(req, res)=> {
//     try {
//         await Question.insertMany({ questions, answers })
//         console.log("Inserted")
//     } catch (error) {
//         res.json({ error })
//     }
// }
