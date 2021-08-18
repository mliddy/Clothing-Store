//Root-reducer is the actual base object that represents all of the state of our application
// Code that combines all our states together. all reducers will go into this root reducer
// Then the root reducer will combine them all into a single object

import {combineReducers} from 'redux'

import userReducer from './user/user.reducer'

export default combineReducers({
    user:userReducer
})
