import React from 'react';
import Card from './card';
import { connect } from 'react-redux';

const ShoppingList = (props) => {
  const addToCart = (item) => {
    props.addToCart(item);
    alert(`${item.name} added to cart successfully`);
  }
  return (
    <div>
      <Card productList={props.productList} addToCart={addToCart} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    productList: state.productList,
    cartItems: [state.cartItems]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      dispatch({
        type: 'ADD_TO_CART',
        payload: item
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);