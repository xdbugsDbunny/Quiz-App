import React, { useState,useContext } from 'react'
import { Box, Button, Dialog, TextField, Typography,InputAdornment, styled } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import loginImage from '../Assets/loginImage.jpg';
import axios from 'axios'
import { DataContext } from './DataContext';


const MainWrapper = styled(Box)`
  height: 400px;
  width: 600px;
  overflow:hidden;
`
const ImageWrapper = styled(Box)`
  width:280px;
`
const Wrapper = styled(Box)`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 420px;
  flex: 1;
  & >div {
    margin-top:20px
  }
`
const LoginButton = styled(Button)`
  text-transform: none;
  height: 48px;
  border-radius: 2px;
  width:80px
`
const CreateAccount = styled(Typography)`
  font-size: 20px;
  text-align: center;
  fonr-weight: 600;
  cursor: pointer;
  text-decoration:underline;
`

const accountInitialValues = {
  login: {
    view: 'login',
  },
  signup: {
    view: ' signup',
  }
}

const signupInitialValues = {
  name: '',
  email: '',
  password: '',
  phone: '',
}

const loginInitialValues = {
  email: '',
  password: '',
}
const Login = ({ open, setOpen }) => {

  const [account,toggleAccount] = useState(accountInitialValues.login)
  const [signup,setSignup] = useState(signupInitialValues)
  const [login,setLogin] = useState(loginInitialValues)
  const [error,setError] = useState()

  const {setUser} = useContext(DataContext)

  const toggleSignup = (toggle) =>{
    toggleAccount(toggle)
  }
  const handleClose = () => {
    setOpen(false)
    toggleAccount(accountInitialValues.login)
  }
  const onInputChange = (e) =>{
    setSignup({...signup,[e.target.name]:e.target.value})
  }

  
  const addUser =async () =>{
    try {
      let response = await axios.post("http://localhost:8000/signup",signup)
      if(!response) return;
      handleClose()  
      setUser(signup.name)
    } catch (error) {
      console.log("Error In Signup API",error)
    }
  }
  
  const onValueChange = (e)=>{
    setLogin({...login,[e.target.name]:e.target.value})
  }
  
  const getUser = async () =>{
    try {
      let response = await axios.post("http://localhost:8000/login",login)
      var status = response.status
      console.log(response.data.name)
      if(status === 200){
        handleClose()
        setUser(response.data.name)
      }
    } catch (err) {
      // console.log("Error In Login API",err)
      setError("Invalid Credentials")
    }
  }

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
      <Typography style={{textAlign:'center',marginTop:'3px',fontWeight:600,color:'#317773'}} variant='h2' >Login Here</Typography>
      <MainWrapper>
        <Box style={{display:'flex'}} >
                <ImageWrapper>
                  <img alt='Login Illustraion' src={loginImage} width='300px' height='400px' />
                </ImageWrapper>
            { 
              account.view === 'login' ?
              <Wrapper>
                <TextField variant="outlined" onChange={(e)=>onValueChange(e)} name='email' label="Enter Email Address" />
                <TextField variant="outlined" onChange={(e)=>onValueChange(e)} name='password' type='password' label="Enter Password" />
                <Typography style={{fontSize:'12px',color:'red'}}>{error}</Typography>
                <br/>
                <LoginButton onClick={()=>getUser()}>Login</LoginButton>
                  <Typography>Don't Have a Accout?</Typography>
                  <CreateAccount onClick={()=>toggleSignup(accountInitialValues.signup)} >Create New Account.</CreateAccount>
              </Wrapper>
              :
              <Wrapper>
                <TextField variant="outlined" name='name' onChange={(e)=>onInputChange(e)} label="Your Name" size='small' />
                <TextField variant="outlined" name='email' onChange={(e)=>onInputChange(e)} label="Email Address" required size='small'/>
                <TextField variant="outlined" name='phone' onChange={(e)=>onInputChange(e)} label="Phone Number" size='small'/>
                <TextField variant="outlined" name='password' type='password' onChange={(e)=>onInputChange(e)} label="Password" required size='small'/>
                <br/>
                <LoginButton onClick={()=>addUser()}>Sign Up</LoginButton>
                  <Typography>Already Have a Accout?</Typography>
                  <CreateAccount onClick={()=>toggleSignup(accountInitialValues.login)}>Login Here</CreateAccount>
              </Wrapper>
          }
        </Box>
      </MainWrapper>
    </Dialog>
  )
}

export default Login;