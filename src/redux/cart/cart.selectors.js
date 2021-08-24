// Selectors: ways to use caching/memoization
// INout selector => a function that takes ythe whole state and returns only a part of it 
// Reason for selectors is to take advantage of memoiation/caching to avoid having to 
// rerender every time when we are grabbing a value, for example the cart item count
import {createSelector} from 'reselect'

// input selector => grab the state we need, only (cart)
const selectCart = state => state.cart;

// This selector uses createSelector. Used to grab the cartItems
// Takes 2 arguments: 1st is an array of input selectors, in our case only one - selectCart
// 2nd argument is a function that will return the value we want out of the selector (cartItems in this case)
// Becasuse we used this format, it is now a memoized selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);


// new selector to select the cartItems count
// Takes the selectCartItems as the first paremter(which returns cartItems)
// Then we pass in that cartItems object and run the reduce function on it
// So the selector finally returns the item count as the output from the reduce() function
// So now we have a memoized selector for the itemCount. 
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulator,cartItem) => accumulator+cartItem.quantity,0)
);


//Next selector is to return the 'hidden' variable in cart. Remember: cart has 2 properties: cartItems and hidden
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((totalPrice,item) => totalPrice + item.price*item.quantity,0)
);