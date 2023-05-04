import { Box, Button, InputBase, Link, Typography,TextField } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import NearMeIcon from '@mui/icons-material/NearMe';

const Contact = () => {
  return (
    <Box display='flex' flexDirection='column'>
      {/* <Box display='flex' justifyContent='center'>
        <Typography variant='h1' color='teal' >Contact</Typography>
      </Box> */}
      <br></br>
      <br></br>
      <Box display='flex' justifyContent='center '>
        <Button><Link href='https://github.com/xdbugsDbunny' ><GitHubIcon fontSize='large'/></Link></Button>
        <Button><Link href='https://www.linkedin.com/in/suraj-negi-948945141/' ><LinkedInIcon fontSize='large'/></Link></Button>
        <Button><Link href='https://www.instagram.com/xdbugsbunny/' ><InstagramIcon fontSize='large'/></Link></Button>
      </Box>
      <br></br>
      <Typography variant='h2' style={{textAlign:'center',color:'#0E9399'}} >Contact Me</Typography>
      <Box>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
              <TextField id="outlined-basic" label="Your Name" variant="outlined" size='large' fullWidth helperText="Please enter your name" />
              </div>
            </div>
            <div className='row'style={{ marginTop: '20px' }}>
              <div className='col-md-12'>
              <TextField id="outlined-basic" label="Email Address" variant="outlined" size='large' fullWidth helperText="Please enter email address" />
              </div>
            </div>
            <div className='row' style={{ marginTop: '20px' }}>
              <div className='col-md-12' >
              <TextField id="outlined-basic" label="Message" variant="outlined" size='large' fullWidth helperText="Type A Message" multiline rows={4} />
              </div>
            </div>
            <Button variant="outlined" style={{marginTop: '20px'}}>Submit</Button>
          </div>
        </div>
      </Box>
    </Box>
  )
}

export default Contact;