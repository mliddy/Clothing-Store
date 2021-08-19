import { UserActionTypes } from "./user.types" // again to avoid typos,etc

//function that returns an object. Object is in the correct format that the action is expecting
// In this case we are creating the setCurrentUser action function
// Function that takes one parameter - the user object, either from snapshot - firebase, or userAuth(google)
// It returns an object(the action) where teh type is SET_CURRENT_USER - the string that the reducer is expecting

export const setCurrentUser = user =>({
type:UserActionTypes.SET_CURRENT_USER,
payload:user // send the user object as teh payload
})
