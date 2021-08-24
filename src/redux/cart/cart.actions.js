// All the actions that our reducers will handle go in here

import CartActionTypes from './cart.types';

//Action to toggle hidden from true to false and vice versa
//Takes in nothing (), returns the type
export const toggleCartHidden = () =>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
});

//Action to add an item to the cart
// Takes in the item to be added to the cart, returns the type and item as the payload
export const addItem = (item) =>({
    type: CartActionTypes.ADD_ITEM, // what is it?
    payload: item
});

export const clearItemFromCart = (item) =>({
type: CartActionTypes.CLEAR_ITEM_FROM_CART,
payload:item
});

export const removeItem = (item) =>({
    type:CartActionTypes.REMOVE_ITEM,
    payload:item
})