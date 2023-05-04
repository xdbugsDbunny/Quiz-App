import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { tryAgainAction } from '../Redux/questionReducer'
import { resetResultAction } from '../Redux/resultReducer'
import { totalAttempts, totalScore, checkResult } from '../hepler/helper'
import { usePostResult } from '../Redux/SetResult'
import { Divider, Typography } from '@mui/material'

const Result = () => {
  const dispatch = useDispatch()

  const {questions : {queue,answers}, result : {result, userId}} = useSelector(state =>state)


  const totalPoints = queue.length * 10;
  const attempts = totalAttempts(result)
  const score = totalScore(result, answers, 5)
  const finalResult = checkResult(totalPoints, score)

  usePostResult({ 
    result, 
    username : userId,
    attempts,
    points: score,
    achived : finalResult ? "Passed" : "Failed"
   });

  const tryAgain = () =>{
    dispatch(tryAgainAction())
    dispatch(resetResultAction())
  }

  return (
    <div style={{display: 'block',position: 'relative',margin: '40px auto',height: 'auto',width: '800px',padding: '20px'}}>
      <h1 style={{textAlign:'center'}}>Quiz Application</h1>
      <div style={{    display: 'flex',justifyContent: 'center',flexDirection: 'column',border: '3px solid black',padding:' 3em 4em',gap: '1em', borderRadius:'15px'}}>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <Typography style={{fontSize: '1.4em',color: 'blue'}}>Username</Typography>
          <Typography style={{fontSize: '1.4em'}}><b>{userId}</b></Typography>
        </div>
        <Divider/>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <Typography style={{fontSize: '1.4em',color: 'blue'}}>Total Quiz Points :</Typography>
          <Typography style={{fontSize: '1.4em'}}><b>60</b></Typography>
        </div>
        <Divider/>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <Typography style={{fontSize: '1.4em',color: 'blue'}}>Total Score :</Typography>
          <Typography style={{fontSize: '1.4em'}}><b>{score || 0}</b></Typography>
        </div>
        <Divider/>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <Typography style={{fontSize: '1.4em',color: 'blue'}}>Total Questions :</Typography>
          <Typography style={{fontSize: '1.4em'}}><b>12</b></Typography>
        </div>
        <Divider/>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <Typography style={{fontSize: '1.4em',color: 'blue'}}>Total Attempts :</Typography>
          <Typography style={{fontSize: '1.4em'}}><b>{attempts || 0 }</b></Typography>
        </div>
        <Divider/>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <Typography style={{fontSize: '1.4em',color: 'blue'}}>Result</Typography>
          <Typography style={{fontSize:'1.4em',color: `${finalResult ? "Green" : "Red"}`}}><b>{finalResult ? "Passed": "Failed"}</b></Typography>
        </div>
      </div>
      <div style={{display: 'flex',justifyContent:'space-between',paddingTop: '2em'}}>
        <Link className='btn btn-outline-dark btn-lg' to='/' onClick={tryAgain}>Try Again</Link>
        <Link className='btn btn-outline-dark btn-lg' to='/table' onClick={tryAgain}>LeaderBoard</Link>
      </div>
    </div>
  )
}

export default Result