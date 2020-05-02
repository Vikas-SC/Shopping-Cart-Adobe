const initState = {
  productList: [
    {
      id: 1,
      name: "Samsung Series 4",
      image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      price: {
        actual: 13999,
        display: 22500
      },
      discount: 37
    },
    {
      id: 2,
      name: "Samsung Super 6",
      image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      price: {
        actual: 35999,
        display: 66900
      },
      discount: 46
    },
    {
      id: 3,
      name: "Samsung The Frame",
      image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      price: {
        actual: 84999,
        display: 133900
      },
      discount: 36
    },
    {
      id: 4,
      name: "Thomson B9 Pro",
      image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      price: {
        actual: 9999,
        display: 16999
      },
      discount: 41
    },
    {
      id: 5,
      name: "LG Ultra HD",
      image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      price: {
        actual: 39990,
        display: 79990
      },
      discount: 50
    },
    {
      id: 6,
      name: "Vu Ready LED TV",
      image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      price: {
        actual: 7999,
        display: 17e3
      },
      discount: 52
    },
    {
      id: 7,
      name: "Koryo Android TV",
      image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      price: {
        actual: 55999,
        display: 199990
      },
      discount: 71
    },
    {
      id: 8,
      name: "Micromax LED Smart",
      image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      price: {
        actual: 9999,
        display: 27990
      },
      discount: 64
    }
  ],
  cartItems: []
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'ADD_TO_CART') {
    localStorage.setItem('cartItems', JSON.stringify([...state.cartItems, action.payload]));
    return {
      ...state,
      cartItems: [...state.cartItems, action.payload]
    }
  }
  if (action.type === 'REMOVE_ITEM') {
    let updateCartItems = state.cartItems.filter(item => {
      return action.id !== item.id;
    });
    return {
      ...state,
      cartItems: updateCartItems
    }
  }
  return state;
}

export default rootReducer;