import { Grid, Typography } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal'

const Booking = ({booking, date}) => {
 const {name, time, space} = booking;
 const [openBooking, setOpen] = React.useState(false);
    const handleBookingOpen = () => setOpen(true);
    const handleBookingClose = () => setOpen(false);
  
 
    return (
       <>
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{py:3}}>
                <Typography sx={{ color: 'info.main' , fontWeight:600}} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {space} SPACE AVAILABLE
                </Typography>
                <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINMENT</Button>
            </Paper>
        </Grid>
           
        <BookingModal
        date = {date}
        handleBookingClose={handleBookingClose}
        openBooking={openBooking}
        booking={booking}
        ></BookingModal>

       </>
        
    );
};

export default Booking;