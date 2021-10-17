import React from 'react';
import Card from '../UI/Card';
import classes from './Welcome.module.css';
import OneImage from '../../images/1.jpg';
import TwoImage from '../../images/2.jpg';
import ThreeImage from '../../images/3.jpg';
import FourImage from '../../images/4.jpg';
import FiveImage from '../../images/5.jpg';
import SixImage from '../../images/6.jpg';
import SevenImage from '../../images/7.jpg';
import EightImage from '../../images/8.jpg';
import NineImage from '../../images/9.jpg';
import TenImage from '../../images/10.jpg';

const Welcome = () => {
  return (
    <div className={classes.containerItem}>
      <div className="item"><Card><img src={OneImage} alt="OneImage" className={classes.images} /></Card></div>
      <div className="item"><Card><img src={TwoImage} alt="TwoImage" className={classes.images} /></Card></div>
      <div className="item"><Card><img src={ThreeImage} alt="ThreeImage" className={classes.images} /></Card></div>
      <div className="item"><Card><img src={FourImage} alt="FourImage" className={classes.images} /></Card></div>
      <div className="item"><Card><img src={FiveImage} alt="FiveImage" className={classes.images} /></Card></div>
      <div className="item"><Card><img src={SixImage} alt="SixImage" className={classes.images} /></Card></div>
      <div className="item"><Card><img src={SevenImage} alt="SevenImage" className={classes.images} /></Card></div>
      <div className="item"><Card><img src={EightImage} alt="EightImage" className={classes.images} /></Card></div>
      <div className="item"><Card><img src={NineImage} alt="NineImage" className={classes.images} /></Card></div>
      <div className="item"><Card><img src={TenImage} alt="TenImage" className={classes.images} /></Card></div>
      <div className="item"><Card><img src={OneImage} alt="OneImage" className={classes.images} /></Card></div>
      <div className="item"><Card><img src={TwoImage} alt="TwoImage" className={classes.images} /></Card></div>
      <div className="item"><Card><img src={ThreeImage} alt="ThreeImage" className={classes.images} /></Card></div>
      <div className="item"><Card><img src={FourImage} alt="FourImage" className={classes.images} /></Card></div>
      <div className="item"><Card><img src={FiveImage} alt="FiveImage" className={classes.images} /></Card></div>
      <div className="item"><Card><img src={SixImage} alt="SixImage" className={classes.images} /></Card></div>
      <div className="item"><Card><img src={SevenImage} alt="SevenImage" className={classes.images} /></Card></div>
      <div className="item"><Card><img src={EightImage} alt="EightImage" className={classes.images} /></Card></div>
      <div className="item"><Card><img src={NineImage} alt="NineImage" className={classes.images} /></Card></div>
      <div className="item"><Card><img src={TenImage} alt="TenImage" className={classes.images} /></Card></div>
    </div>
  );
};

export default Welcome;
