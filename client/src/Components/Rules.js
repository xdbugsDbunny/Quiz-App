import { Typography } from '@mui/material'
import React from 'react'

const Rules = () => {
  return (
    <div>
      <ol style={{listStyleType:'', fontSize:22, marginLeft:'150px'}}>
            <li><Typography variant='h5' >You Will Be Asked 12 questions one after another.</Typography></li>
            <li><Typography variant='h5' >5 Points is awarded for the correct answer.</Typography></li>
            <li><Typography variant='h5' >Each questions has three options. You can choose only one option.</Typography></li>
            <li><Typography variant='h5' >You can review and change answers before the quiz finish.</Typography></li>
            <li><Typography variant='h5' >You Can go to Previous Question to change your answer.</Typography></li>
            <li><Typography variant='h5' >The result will be declared at the end of the quiz.</Typography></li>
            <li><Typography variant='h5' >You Have To Score 50% to pass the exam.</Typography></li>
            <li><Typography variant='h5' >You have to Enter Your Name in order to start the quiz. </Typography></li><br/>
        </ol>
            <Typography variant='h3'  style={{color:'red', textAlign:'center'}}>Good Luck</Typography>
            <Typography variant='h3'  style={{color:'teal'}}>Enter Your Name and Click On Start Button</Typography>
    </div>
  )
}

export default Rules