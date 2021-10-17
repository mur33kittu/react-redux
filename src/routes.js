import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import OrderOnline from './components/order-online/orderOnline';
import Welcome from './components/welcome/Welcome';
import ContactUs from './components/contact-us/contactUs';
import Admin from './components/admin/admin';

const Routes = () => {
  return (
    <Switch>
      <Route path="/orderOnline" component={OrderOnline} />
      <Route path="/contactUs" component={ContactUs} />
      <Route path="/admin" component={Admin} />
      <Route path="/" exact>
        <Redirect to="/welcome" />
      </Route>
      <Route path="/welcome" exact component={Welcome} />
    </Switch>
  );
};

export default Routes;
