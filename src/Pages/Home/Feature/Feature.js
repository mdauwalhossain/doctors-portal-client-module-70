import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Feature = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }} mt={6}>
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={8}>
                    <Item><img src="https://st3.depositphotos.com/4732855/i/600/depositphotos_191854690-stock-photo-blonde-doctor-nurse-with-stethoscope.jpg" alt="" /></Item>
                    </Grid>
                    <Grid item xs={8} sx={{ textAlign: 'left'}} md={6} >
                        <Typography sx={{ fontWeight: 600, textAlign: 'left'}} variant="h4" gutterBottom component="div">
                            Exceptional Dental <br />Care, on Your Terms
                        </Typography> 
                        <Typography sx={{ textAlign: 'left'}} color="text.secondary" variant="subtitle2" gutterBottom component="div">
                                A doctor is responsible for all sides of care of a patient. They diagnose, educate, and treat 
                                patients to ensure that they have the best possible care. A few of the main duties of a doctor 
                                are performing diagnostic tests, recommending specialists for patients, document patient's  medical history, and educating patients.
                                A doctor is responsible for all sides of care of a patient. They diagnose, educate, and treat patients to ensure that they have the best possible care. A few of the main duties of a doctor are performing diagnostic tests, recommending specialists for patients, document patient's medical history, and educating patients.
                        </Typography>  
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }} md={8}>Learn More</Button>                
                    </Grid>
                </Grid>
            </Box>
           
        </>
    );
};

export default Feature;