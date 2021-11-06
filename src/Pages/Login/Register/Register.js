import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert, AlertTitle } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {user, registerUser, isLoading, authError} = useAuth();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
}

const handleLoginSubmit = e => {
    if( loginData.password !== loginData.password2 ){
        alert('Your password did not match');
    }

    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
}

    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    <Grid sx={{mt:8}} item xs={12} md={6}>
                        <Typography variant="button" display="block" gutterBottom>
                            Register
                        </Typography>
                       
                        { !isLoading && <form onSubmit={ handleLoginSubmit }>
                            <TextField
                            sx={{width:'75%', m:1}} 
                            id="standard-basic" 
                            label="Your Name" 
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                            <TextField
                            sx={{width:'75%', m:1}} 
                            id="standard-basic" 
                            label="Your Email" 
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                            <TextField
                            sx={{width:'75%', m:1}} 
                            id="standard-basic" 
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                            <TextField
                            sx={{width:'75%', m:1}} 
                            id="standard-basic" 
                            label="Re-Type Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />

                            <Button sx={{width:'75%', m:1}} type="submit" variant="contained">
                                Register
                            </Button>
                            <NavLink to="/login"
                            style={{ textDecoration: 'none'}}
                            sx={{m:1 } }>
                            <Button variant="text">Have account ? Go to Log In</Button>
                            </NavLink>
                        </form>}
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

export default Register;