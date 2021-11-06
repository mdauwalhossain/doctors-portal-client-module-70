import { LocationOff } from '@mui/icons-material';
import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert, AlertTitle } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, signInWithGoogle, authError} = useAuth();


    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e =>{
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    setLoginData(newLoginData);

}

const handleLoginSubmit = e => {
   loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
}


const handleGoogleSignIn = () =>{
    signInWithGoogle(location, history)
}

    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    <Grid sx={{mt:8}} item xs={12} md={6}>
                        <Typography variant="button" display="block" gutterBottom>
                            Login
                        </Typography>
                       
                        <form onSubmit={ handleLoginSubmit }>
                            <TextField
                            sx={{width:'75%', m:1}} 
                            id="standard-basic" 
                            label="Your Email" 
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                            <TextField
                            sx={{width:'75%', m:1}} 
                            id="standard-basic" 
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                            <Button sx={{width:'75%', m:1}} type="submit" variant="contained">
                                Log In
                            </Button>
                            <NavLink to="/register"
                            style={{ textDecoration: 'none'}}
                            sx={{m:1 } }>
                            <Button variant="text">New User ?? Please Register</Button>
                            </NavLink>
                        </form>
                        <Button onClick={handleLoginSubmit} variant="contained">Google Sign In</Button>


                        {isLoading && <CircularProgress/>}
                        {user?.email && <Alert severity="success">
                                        <AlertTitle>Success</AlertTitle>
                                        User created successfully — <strong>Congrats</strong>
                                        </Alert>}

                        {authError &&  <Alert severity="error">
                                        <AlertTitle>Error</AlertTitle>
                                        Error — <strong>Error!</strong>
                                       </Alert>} 

                    </Grid>
                        <Grid item xs={12} md={6}>
                        <img style={{width: '100%'}} src={login} alt="" />
                    </Grid>
                </Grid>
               
            </Container>
        </>
    );
};

export default Login;