import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Routes from './routes';
// import CartProvider from './store/CartProvider';
import {connect} from 'react-redux';
import * as actions from './actions';

class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      cartIsShown: false,
    };
    this.hideCartHandler = this.hideCartHandler.bind (this);
    this.showCartHandler = this.showCartHandler.bind (this);
  }

  showCartHandler = () => {
    this.setState ({cartIsShown: true});
  };

  hideCartHandler = () => {
    this.setState ({cartIsShown: false});
  };

  renderButton = () => {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth (false)}>Sign Out</button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth (true)}>Sign In</button>
      );
    }
  };

  render () {
    return (
      <BrowserRouter>
        {/* <CartProvider> */}
        {this.state.cartIsShown && <Cart onClose={this.hideCartHandler} />}
        <Header onShowCart={this.showCartHandler}>
          <ul><li>{this.renderButton ()}</li></ul>
        </Header>
        <Routes />
        {/* </CartProvider> */}
      </BrowserRouter>
    );
  }
}

function mapStateToProps (state) {
  return {auth: state.auth};
}

export default connect (mapStateToProps, actions) (App);
