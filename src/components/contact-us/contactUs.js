import React from 'react';
import Card from '../UI/Card';
import classes from './contact-us.module.css';
import DirectionsIcon from './directionsIcon';
import EmailIcon from './emailIcon';
import CellIcon from './cell';

const ContactUs = () => {
  return (
    <div className={classes.contactUs}>
      <Card>
        <h3>Suchithra Gopinath</h3>
        <h4>Hartford</h4>
        <h6><CellIcon /> 860-834-2028</h6>
        <h6><EmailIcon /> suchithra.gopinath05@gmail.com</h6>
        <h6><DirectionsIcon /> 39 Buckland St, CT, United States</h6>
      </Card>
    </div>
  );
};

export default ContactUs;
