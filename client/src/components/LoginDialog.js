import { useState, useContext } from 'react';

import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material'

import { authenticateSignup, authenticateLogin } from '../service/api';
import { DataContext } from '../context/DataProvider';

const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
    padding: 0;
    padding-top: 0;
`;

const Image = styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;;
width: 24%;
    height: 83%;
    padding: 45px 35px;

    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600 
        ;
    }
`;

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
    height: 48px;
    border-radius: 2px;
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
    `;

const accountInitialValue = {
  login: {
    view: 'login',
    heading: 'Login',
    subHeading: 'Get access to your Orders, Wishlist and Recommendations'
  },
  signup: {
    view: 'signup',
    heading: "Looks like you're new here!",
    subHeading: "signup with your mobile number to get started"
  }
}

const signupInitialValue = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  phone: ''
}


const loginInitialValue = {
  username: '',
  password: ''
}

const LoginDialog = ({ open, setOpen }) => {

  const [account, toggleAccount] = useState(accountInitialValue.login);
  const [signup, setSignup] = useState(signupInitialValue);
  const [login, setLogin] = useState(loginInitialValue);
  const [error, setError] = useState(false);

  const { setAccount } = useContext(DataContext)

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValue.login);
    setError(false)
  }

  const toggleSignup = () => {
    toggleAccount(accountInitialValue.signup)
  }

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value })
  }

  const signupUser = async () => {
    try {
      let response = await authenticateSignup(signup);
      console.log(response);
      if (!response) {
        return;
      }
      handleClose();
      setAccount(signup.firstname);
    } catch (error) {
      console.error('Error during signup:', error);
    }
  }

 const onValueChange = (e) => {
  setLogin({ ...login, [e.target.name]: e.target.value })
 }

 const loginUser = async () => {
let response = await authenticateLogin(login);

if(response.status === 200){
  handleClose();
  setAccount(response.data.data.firstname)
}else{
  setError(true);
}
 }

 


  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
      <Component>
        <Box style={{ display: 'flex', height: '100%' }}>
          <Image>
            <Typography variant='h5'>{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
          </Image>
          {
            account.view === 'login' ?
              <Wrapper>

                <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label="Enter Username" />
                {error && <Error>Please enter valid credentials</Error>}
                <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label="Enter Password" />
                <Text>By continuing, you agree to Flipkart's terms of use and Privacy Policy </Text>
                <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                <Typography style={{ textAlign: 'center' }}>OR</Typography>
                <RequestOTP>Request OTP</RequestOTP>
                <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
              </Wrapper>
              :
              <Wrapper>


                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
                <LoginButton onClick={() => signupUser()}>Continue</LoginButton>

              </Wrapper>

          }
        </Box>
      </Component>
    </Dialog>
  )
}

export default LoginDialog