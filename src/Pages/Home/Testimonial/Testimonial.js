import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);


const Testimonial = () => {
    return (
        <>
            <Typography sx={{ fontWeight: 600, textAlign: 'left'}} mt={6} variant="h4" gutterBottom component="div">
                What's Our Patient <br />Says
            </Typography>  

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(3)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Item> A doctor is responsible for all sides of care of a patient. They diagnose, educate, and treat 
                                patients to ensure that they have the best possible care. A few of the main duties of a doctor 
                                are performing diagnostic tests, recommending specialists for patients, document patient's  medical history, and educating patients.</Item>
                    </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default Testimonial;