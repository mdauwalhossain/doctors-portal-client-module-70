import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinAvail from '../AppoinAvail/AppoinAvail';
import AppoinHeader from '../AppoinHeader/AppoinHeader';

const Appoinment = () => {
    return (
        <div>
            <h1>Appoinment Page</h1>
            <Navigation></Navigation>
            <AppoinHeader></AppoinHeader>
            <AppoinAvail></AppoinAvail>

        </div>
    );
};

export default Appoinment;