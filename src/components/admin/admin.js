import React, {Component} from 'react';
import requireAuth from '../hoc/requireAuth';

class Admin extends Component {
  constructor () {
    super ();
    console.log(this.props);
  }
 
  render () {
    return (
      <div>
        Admin Page
      </div>
    );
  }
}

export default requireAuth(Admin);
