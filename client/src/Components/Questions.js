import React, { useEffect, useState } from 'react'

import { useGetQuestion } from '../Redux/GetQuestion'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateResult } from '../Redux/SetResult'
import { Box } from '@mui/material'

const Questions = ({ onChecked }) => {

    const [checked, setChecked] = useState(undefined)
    
    const { trace } = useSelector(state => state.questions)
    const result = useSelector(state => state.result.result)

    const [{ Loading, apiData, message }] = useGetQuestion()
    const dispatch = useDispatch()
    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const state = useSelector(state => state.questions.trace)

    // useSelector(state => console.log(state))

    useEffect(() => {
        dispatch(UpdateResult({ trace, checked }))
    }, [checked])

    const onSelect = (index) => {
        onChecked(index)
        setChecked(index)
        // console.log(i)
    }

    if (Loading) return <h3 style={{ color: '#f0f0f0' }}>Loading</h3>
    if (message) return <h3 style={{ color: '#f0f0f0' }}>{message || "Unknown Error"}</h3>

    return (
        <Box height='400px' alignItems='center' width='800px'>
            <br></br>
            <Box display='flex' marginBottom='12px'>
                <h2>{questions?.id}.</h2> &nbsp;&nbsp;&nbsp;&nbsp; <h2>{questions?.question}</h2>
            </Box>
            <ul style={{ listStyle: 'none' }} key={questions?.id} >
                {
                questions?.options.map((q, index) => (
                    <div className="form-check" key={index}>
                        <br/>
                        <input className="form-check-input" type='radio' value={checked} name='options' onChange={() => onSelect(index)} id={`q${index}-option`} />
                        <label className="form-check-label" htmlFor={`q${index}-option`} style={{ marginLeft: '10px' }} >{q}</label>
                        <hr/>
                    </div>
                ))
                }
            </ul>
        </Box>
    )
}

export default Questions