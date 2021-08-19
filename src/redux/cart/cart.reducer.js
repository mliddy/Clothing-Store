import CartActionTypes from './cart.types'

// Define state value (hidden) and initial value(true)
// This reducer is used to toggle the hidden state of the cart, thus we can show or hide the cart from anywhere
// in the app
const INITIAL_STATE = {
    hidden: true
};

// Reducer takes the default state and an action as parmeters
const cartReducer = (state = INITIAL_STATE, action) => { 

    // Switch on action.type. IF the action.type is TOGGLE_CART_HIDDEN then return a new object with hidden reversed
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default: // else, change nothing and return the state
            return state;
    }
}

export default cartReducer;

