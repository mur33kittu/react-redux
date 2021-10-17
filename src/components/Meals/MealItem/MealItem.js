import React from 'react';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import * as actions from '../../../actions';
import {connect} from 'react-redux';

class MealItem extends React.Component {
  constructor () {
    super ();
    console.log (this.props);
  }

  addToCartHandler = amount => {
    this.props.addToCart ({
      id: this.props.id,
      name: this.props.name,
      amount: amount,
      price: parseInt (this.props.price).toFixed (2),
      cuisine: this.props.cuisine,
    });
  };

  render () {
    return (
      <li className={classes.meal}>
        <div>
          <h3>{this.props.name}<small> ({this.props.cuisine})</small></h3>
          <div className={classes.description}>{this.props.description}</div>
          <div className={classes.price}>
            {parseInt (this.props.price).toFixed (2)}
          </div>
        </div>
        <div>
          <MealItemForm onAddToCart={this.addToCartHandler} />
        </div>
      </li>
    );
  }
}

function mapStateToProps (state) {
  return {cart: state.cart};
}

export default connect (mapStateToProps, actions) (MealItem);
