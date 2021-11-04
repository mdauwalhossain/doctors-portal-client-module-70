import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png'

const Register = () => {

    const [loginData, setLoginData] = useState({});

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
}

const handleLoginSubmit = e => {
    if( loginData.password !== loginData.password2 ){
        alert('Your password did not match');
    }
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
                       
                        <form onSubmit={ handleLoginSubmit }>
                            <TextField
                            sx={{width:'75%', m:1}} 
                            id="standard-basic" 
                            label="Your Email" 
                            name="email"
                            type="email"
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
                            <TextField
                            sx={{width:'75%', m:1}} 
                            id="standard-basic" 
                            label="Re-Type Your Password"
                            type="password"
                            name="password2"
                            onChange={handleOnChange}
                            variant="standard" />

                            <Button sx={{width:'75%', m:1}} type="submit" variant="contained">
                                Log In
                            </Button>
                            <NavLink to="/login"
                            style={{ textDecoration: 'none'}}
                            sx={{m:1 } }>
                            <Button variant="text">Have account ? Go to Log In</Button>
                            </NavLink>
                        </form>
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