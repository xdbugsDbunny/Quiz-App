import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";

import * as actionType from '../Redux/questionReducer'
import { getDataFromServer } from "../hepler/helper";


export const useGetQuestion = () => {
    const dispatch = useDispatch()
    const [getData, setData] = useState({Loading: false, apiData: [], message: null})
  
    useEffect(() => {
      setData((prev) => ({...prev, Loading : true}))
      fetchData()
    }, [dispatch]);
    
    const fetchData = async () => {
      try {
        const [{ questions, answers}] = await getDataFromServer(`http://localhost:5000/quiz`, (data) => data)
        console.log(questions.length)
        if (questions.length > 0) {
          setData((prev) => ({...prev, Loading : false}))
          setData((prev) => ({...prev, apiData : questions}))

          dispatch(actionType.startExamAction({question : questions, answers}))
        } else {
          throw new Error("Questions Are Not Available")
        }
      } catch (error) {
        setData((prev) => ({...prev, Loading : false}))
        setData((prev) => ({...prev, message : error}))
      }
    }
    // console.log(getData.apiData); // add this line to check the data
    return [getData, setData]
  }


  export const NextQuestion = () => async (dispatch) =>{
    try {
      dispatch(actionType.nextAction())
    } catch (error) {
      console.log(error)
    }
  }

  export const PrevQuestion = () => async (dispatch) =>{
    try {
      dispatch(actionType.prevAction())
    } catch (error) {
      console.log(error)
    }
  }
  