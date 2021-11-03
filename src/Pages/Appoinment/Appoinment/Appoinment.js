import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinAvail from '../AppoinAvail/AppoinAvail';
import AppoinHeader from '../AppoinHeader/AppoinHeader';

const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <h1>Appoinment Page</h1>
            <Navigation></Navigation>
            <AppoinHeader date={date} setDate={setDate}></AppoinHeader>
            <AppoinAvail date={date}></AppoinAvail>

        </div>
    );
};

export default Appoinment;