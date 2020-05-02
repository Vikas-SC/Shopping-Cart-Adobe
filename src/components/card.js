import React from 'react'
import '../styles/card.scss'

function Card(props) {
  return (
    <div className="row">
      {props.productList.map((item) => {
        return (
          <div className='column'>
            <div className="card">
              <img src={item.image} alt="Avatar" />
              <div>
                <h4><b>{item.name}</b></h4>
                <label><b>${item.price.display}</b></label>&nbsp;&nbsp;
                <strike className="actual">{item.price.actual}</strike>&nbsp;&nbsp;&nbsp;&nbsp;
                <label className="discount"><i>{item.discount}% off</i></label>
                <button onClick={() => props.addToCart(item)}>Add to cart</button>
              </div>
            </div>
          </div>
        )

      })}

    </div >
  )
}

export default Card;
