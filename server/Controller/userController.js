import User from "../Model/userSchema.js";

export const userSignup = async(req,res)=>{
    try {
        const exist = await User.findOne({email:req.body.email})
        if(exist){
            return res.status(401).json({message: 'User Already Exist'})
        }

        const olduser = req.body
        const newUser = new User(olduser)
        await newUser.save()

        res.status(200).json({message: olduser})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const userLogin = async(req,res)=>{
    try {
        const email = req.body.email
        const password = req.body.password

        let user = await User.findOne({email:email,password:password})
        if(user){
           return res.status(200).json({name:user.name})
        }else{
            return res.status(401).json({message:"Invalid Credentials"})
        }
    } catch (error) {
        res.status(500).json('Error',error.message)
    }
}