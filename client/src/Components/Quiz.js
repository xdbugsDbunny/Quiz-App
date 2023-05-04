import React, { useEffect,useState } from 'react'
import Questions from './Questions'
import { useDispatch, useSelector } from 'react-redux'
import { NextQuestion, PrevQuestion } from '../Redux/GetQuestion'
import { PushAnswer } from '../Redux/SetResult'
import {useNavigate } from 'react-router-dom';

const Quiz = () => {

  const [check, setCheck] = useState(undefined)
  const result = useSelector(state => state.result.result)
  const {queue, trace } = useSelector(state => state.questions)
  const disptach = useDispatch()
  const navigate = useNavigate()


  const onNext = () => {
    console.log('Next Question')
    if( trace < queue.length){
      disptach(NextQuestion())
      if(result.length <= trace){
        disptach(PushAnswer(check))
      }
    }
    setCheck(undefined)
  }
  const onPrev = () => {
    console.log('Previous Question')
    if(trace > 0){
      disptach(PrevQuestion())
    }
  }

  const onChecked = (check)=>{
    console.log(check)
    setCheck(check)
  }

  if(result.length && result.length >= queue.length){
    navigate('/result')
  }

  return (
    <div>
      <div className='row'>
        <h1 style={{ textAlign: 'center' }}>Quiz Application</h1>
        <hr/>
      </div>
      <br />
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <div>
            <Questions onChecked={onChecked} />
          </div>
          <div className='row' style={{marginTop:'10px', display:'flex', justifyContent:'center'}} >
            <div className='col-md-2'>
              { trace > 0 ? <button onClick={onPrev} class="btn btn-outline-success btn-lg">Previous</button> :<></>}      
            </div>
            <div className='col-md-8'></div>
            <div className='col-md-2'>
              <button onClick={onNext} class="btn btn-outline-danger btn-lg">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz