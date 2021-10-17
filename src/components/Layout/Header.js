import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/head.jpg';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Header = props => { 
  return (
      <>
        <header className={classes.header}>
          <nav>            
            <ul>
              <li>
                <img src={Logo} alt="logo" className={classes.logoImg} />
              </li>
              <li>
                <NavLink to="/orderOnline">Order Online</NavLink>
              </li>
              <li>
                <NavLink to="/contactUs">Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/admin">Admin</NavLink>
              </li>
              <li>
                <NavLink to="/">Suchi's Kitchen</NavLink>
              </li>             
            </ul>
          </nav>
          <HeaderCartButton onClick={props.onShowCart} />
          {props.children}
        </header>
        <div className={classes['main-image']}>
          <img src={mealsImage} alt="A table full of delicious food!" />
        </div>
      </>
  );
};

export default Header;
