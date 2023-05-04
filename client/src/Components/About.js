import React from 'react'
import { Box, Divider, Typography, styled } from '@mui/material'

const Image = styled('img')({
  width: 370,
})

const About = () => {
  return (
    <Box display="flex" flexDirection='column'>
      <Box textAlign='center'>
        <Typography variant='h2' style={{ marginTop: 20, color: 'teal' }}>
          Suraj Singh Negi
        </Typography>
      </Box>
      <Divider><Typography variant='h5' style={{ color: 'blue' }}>MERN Stack Developer</Typography></Divider>
      <Box display='flex' marginLeft='400px' alignItems='center'>
        <Box width='40%'>
          <Typography variant='h6' >Hi there! My name is <b>Suraj Singh Negi</b> and I'm a MERN Stack Developer. I'm passionate about exploring new technologies and love learning those technologies.
          </Typography>
          <br/>
          <Typography variant='h6'>
            In my free time, I enjoy playing games and often spend time playing FPS Games. I'm also an avid reader and love to explore new topics.
          </Typography>
        </Box>
        <Box>
          <Image src='https://homeschool-curriculum.org/wp-content/uploads/2020/09/453-1024x1024.jpg' />
        </Box>
      </Box>
      <Box display='flex' justifyContent='center'>
        <Box  textAlign='center' width='70%'>
        <Typography variant='h3'>About The Project</Typography>
          <Typography variant='h6'>
            The Quiz App is a web application built using MERN (MongoDB, Express.js, React, and Node.js) Stack. The app features an authentication system where users can create an account or log in to their existing account to access the quiz.
          </Typography>
          <br/>
          <Typography variant='h6'>
            The quiz is comprised of multiple-choice questions, and the user must select one of the given options to proceed. Once the user has answered all of the questions, they will receive their final score and have the option to view the leaderboard.
          </Typography>
          <br/>
          <Typography variant='h6'>
            Additionally, the app keeps track of the user's score and displays their name, points, and rank on the leaderboard. The leaderboard is sorted by the highest scores first, so users can see how they stack up against other quiz takers.
          </Typography>
          <br/>
          <Typography variant='h6'>
            Overall, the Quiz App is an engaging and challenging tool for users to test their knowledge and compete with others. The app's intuitive design and features make it easy to use and navigate, providing a seamless user experience.
          </Typography>
          <br/>
          <Typography variant='h4'>
            Thanks for visiting!
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default About