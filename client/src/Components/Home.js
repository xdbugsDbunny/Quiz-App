import React, { useRef } from 'react'
import {Box, Button, TextField, Typography} from '@mui/material'
import {Link } from 'react-router-dom'
import Rules from './Rules'
import { useDispatch } from 'react-redux'
import { setUserId } from '../Redux/resultReducer'

const Home = () => {

  const inputRef = useRef(null)
  const dispatch = useDispatch()

  const startQuiz = () =>{
    if(inputRef.current?.value){
      dispatch(setUserId(inputRef.current?.value))
    }
    console.log(inputRef.current.value)
  }

  return (
    <Box style={{display:'flex',flexDirection:'column',flex:1,alignItems:'center'}} >
      <Box border='2px solid green' borderRadius='25px' width='800px' textAlign='center' >
        <Typography variant='h1' style={{color:'teal'}} >Quiz Application</Typography>
      </Box>
      <Box marginTop='50px'>
        <Rules />
      </Box>
        <Box style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', width:'500px'}}>
          <input type="text" className="form-control" aria-describedby="inputGroup-sizing-lg" placeholder='Enter Your Name' ref={inputRef} /><br/>
          <Button size='large' variant="contained" style={{margin:'5px'}} >
            <Link to='/quiz' style={{textDecoration:'none',color:'white'}} onClick={startQuiz}> Start Quiz </Link>
          </Button>
        </Box>
    </Box>
  )
}

export default Home