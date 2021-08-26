//Root-reducer is the actual base object that represents all of the state of our application
// Code that combines all our states together. all reducers will go into this root reducer
// Then the root reducer will combine them all into a single object

import {combineReducers} from 'redux'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'

//We've persisted our store (in store.js), now we need to persist our reducer
import {persistReducer} from 'redux-persist'
//Import the type of storage we want to persist. In this case -> localStorage
import storage from 'redux-persist/lib/storage'

//Define a new persist config object. Where do we want to start storing the data =>root
// WHat type we want to persist(storage/localStorage) and finally what data (the cart data) we want to store
// (the reducer we want to persist)
const persistConfig = {
key:'root',
storage,
whitelist:['cart']
}

//Now wrap our combine reducer in our persist reducer, becasue persist is over all these reducers
const rootReducer  =combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer
});

export default persistReducer(persistConfig,rootReducer);
