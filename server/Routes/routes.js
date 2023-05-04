import express from 'express'
import { userSignup,userLogin } from '../Controller/userController.js'
import {getQuestions, getResult, storeResult} from '../Controller/quizController.js' 

const router = express.Router()


router.get('/quiz',getQuestions)

router.get('/result',getResult)

router.post('/result',storeResult)

router.post('/signup',userSignup)

router.post('/login',userLogin)



export default router;