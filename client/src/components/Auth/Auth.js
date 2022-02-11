import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { login, register } from '../../api';
import { useNavigate } from 'react-router-dom';

import useStyles from './styles';

const Auth = () => {
    const classes = useStyles();
    const [isSignIn, setIsSignIn] = useState(true);
    const Navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNo: '',
        password: '',
        confirmPassword: ''
    })

    const switchMode = () => {
        setIsSignIn(!isSignIn);
    };

    const handleOnChnage = (e) => {
        setFormData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(isSignIn)
        {
            let { data } = await login({ emailIdOrUsername: formData.email, password: formData.password });
            if(data.success)
            {
                localStorage.setItem('profile', JSON.stringify({ data }));
            }
        }
        else{
            let { data } = await register(formData);
            if(data.success)
            {
                localStorage.setItem('profile', JSON.stringify({ data }));
            }
        }
        Navigate('/');
    }

  return (
      <Container component="main" maxWidth="xs">
          <Paper className={classes.paper} elevation={3}>
              <Avatar className={classes.avatar}>
                  <LockOutlined />
              </Avatar>
              <Typography variant="h5">{isSignIn ? "Sign In": "Sign Up" }</Typography>
              <form className={classes.form}>
                <Grid container spacing={2}>
                    {!isSignIn && (
                        <>
                            <Grid item xs={6}>
                            <TextField name='firstName' label='First Name' variant='outlined' value={formData.firstName} onChange={handleOnChnage} required autoFocus />
                            </Grid>
                            <Grid item xs={6}>
                            <TextField name='lastName' label='Last Name' variant='outlined' value={formData.lastName} onChange={handleOnChnage} required />
                            </Grid>
                        </>
                    )}
                    <Grid item xs={12}>
                        <TextField name='email' label='Email-Id' variant='outlined' value={formData.email} onChange={handleOnChnage} required fullWidth type="email"/>
                    </Grid>
                    {!isSignIn && (<Grid item xs={12}>
                        <TextField name='contactNo' label='Contact Number' variant='outlined' value={formData.contactNo} onChange={handleOnChnage} required fullWidth/>
                    </Grid>)}
                    <Grid item xs={12}>
                        <TextField name='password' label='Password' variant='outlined' value={formData.password} onChange={handleOnChnage} required fullWidth type="password"/>
                    </Grid>
                    {!isSignIn && (<Grid item xs={12}>
                        <TextField name='confirmPassword' label='Re-enter Password' variant='outlined' value={formData.confirmPassword} onChange={handleOnChnage} required fullWidth type="password"/>
                    </Grid>)}
                    <Grid item xs={12}>
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={handleSubmit}>
                            {!isSignIn ? "Sign Up" : "Sign In"}
                        </Button>
                    </Grid>
                </Grid>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                    <Button onClick={switchMode}>
                        {!isSignIn
                        ? "Already have an account? Sign In"
                        : "Don't have an account? Sign Up"}
                    </Button>
                    </Grid>
                </Grid>
              </form>
          </Paper>
      </Container>
  );
};

export default Auth;
