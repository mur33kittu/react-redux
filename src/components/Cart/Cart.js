import React, {useState} from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
// import CartContext from '../../store/cart-context';
import Checkout from './Checkout';
import * as actions from '../../actions';
import {connect} from 'react-redux';

const Cart = props => {  
  const [isCheckout, setIsCheckout] = useState (false);
  const [isSubmitting, setIsSubmitting] = useState (false);
  const [didSubmit, setDidSubmit] = useState (false);
  // const cartCtx = useContext(CartContext);

  const totalAmount = `$${props.cart.totalAmount.toFixed (2)}`;
  const hasItems = props.cart.items.length > 0;

  const cartItemRemoveHandler = id => {
    props.removeFromCart (id);
  };

  const cartItemAddHandler = item => {
    console.log(props);
    props.addToCart (item);
  };

  const orderHandler = () => {
    setIsCheckout (true);
  };

  const submitOrderHandler = async userData => {
    setIsSubmitting (true);
    await fetch ('/api/meals', {
      method: 'POST',
      body: JSON.stringify ({
        user: userData,
        orderedItems: props.items,
      }),
    });
    setIsSubmitting (false);
    setDidSubmit (true);
    props.clearCart ();
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {props.cart.items.map (item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind (null, item.id)}
          onAdd={cartItemAddHandler.bind (null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems &&
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout &&
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

// export default Cart;
function mapStateToProps (state) {
  return {cart: state.cart};
}

export default connect (mapStateToProps, actions) (Cart);
