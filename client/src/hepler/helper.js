import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios'

export const totalAttempts = (result) =>{
    return result.filter( r => r !== undefined).length;
}

export const totalScore = (result, answers,point) => {
    return result.map((item, index)=>answers[index] === item).filter(index =>index).map(index => point).reduce((prev,current) => prev + current,0);
}

export const checkResult = (totalScore, score) =>{
    return (totalScore * 50/100) < score;
}

export const CheckUserExist = ({children}) =>{
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={'/'} replace={true} ></Navigate>
}

export const getDataFromServer = async(url, callback) =>{
    const data =await (await axios.get(url))?.data
    return callback ? callback(data) : data;
}

export const postResultOnServer = async(url,result, callback) =>{
    const data =await (await axios.post(url,result))?.data
    return callback ? callback(data) : data;
}

