
//need to add middleware to the store so we catch and display the actions as they are passed to the root reducer
import{createStore,applyMiddleware} from 'redux'

import logger from 'redux-logger'

 import rootReducer from './root-reducer'

 //create middlwware using the logger
 const middlewares = [logger]

 // Create the actual store
 // the applyMiddleware argument allows us ot pass in all the values in the logger array into the function as 
 // indovidual elements.
 const store = createStore(rootReducer,applyMiddleware(...middlewares));
export default store;