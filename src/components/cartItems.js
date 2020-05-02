import React from 'react';
import { connect } from 'react-redux';
import '../styles/card.scss'
import Header from '../components/header';

function CartItems(props) {
  const items = props.cartItems[0];

  const quantityMinus = (item) => {
    const qt = document.getElementById(`${item.id}`)
    if (qt.value > 1)
      qt.value = parseInt(qt.value) - 1;

  }

  const quantityPlus = (item) => {
    const qt = document.getElementById(`${item.id}`);
    qt.value = parseInt(qt.value) + 1;
  }

  const removeItem = (id) => {
    props.removeItem(id);

  }
  return (
    <>
      <Header></Header>
      <div className="itemRow">
        {items.length > 0 ? items.map((item, index) => {
          return (
            <div className="itemColumn">
              <div className="cartItem">
                <img src={item.image} alt="Avatar" />
                <div className="">
                  <h4><b>{item.name}</b></h4>
                  <label><b>${item.price.display}</b></label>&nbsp;&nbsp;
                <strike className="actual">{item.price.actual}</strike>&nbsp;&nbsp;&nbsp;&nbsp;
                <label className="discount"><i>{item.discount}% off</i></label>
                </div>
                <div className="quantiy">
                  <input type='button' value='-' className='qtyminus' field='quantity' onClick={() => quantityMinus(item)} ></input>
                  <input type='text' id={item.id} name='quantity' value={1} className='qty' disabled />
                  <input type='button' value='+' className='qtyplus' field='quantity' onClick={() => quantityPlus(item)} />
                </div>
                <button className="removeBtn" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>)
        }) : 'Your cart is empty'}
      </div>
      <div>

      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cartItems: [state.cartItems]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch({ type: 'REMOVE_ITEM', id: id })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
