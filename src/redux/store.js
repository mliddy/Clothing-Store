
//need to add middleware to the store so we catch and display the actions as they are passed to the root reducer
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'

//Alows us to cache our store based on certain conidtions
import { persistStore } from 'redux-persist'

//create middlwware using the logger
const middlewares = [logger]

// Create the actual store
// the applyMiddleware argument allows us ot pass in all the values in the logger array into the function as 
// indovidual elements.
 export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Now to persist:
// persistor is now a persisted version of our store => all data
export const persistor = persistStore(store); 

//NOw return an object that contains the store aswell as the persistor. But im not sure this actually does anything
const exportObject = { store,persistor }; 
export default exportObject;