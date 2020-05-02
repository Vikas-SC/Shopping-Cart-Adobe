import React from 'react';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
function Cart(props) {
  console.log(props);
  return (
    <Link to="/cart"><div>
      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      <span className='badge badge-warning' id='lblCartCount'> {props.cartItems.length} </span>
    </div>
    </Link>
  )
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems
  }
}

export default connect(mapStateToProps)(Cart);

