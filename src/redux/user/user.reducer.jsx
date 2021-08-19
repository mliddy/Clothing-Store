import { UserActionTypes } from "./user.types"; // To avoid typos, etc

//reducer is just a function that gets 2 properties: last/current state and the action(object with a type)
// payload is a flexible prptery that we may want to use

const INITIAL_STATE = {
    currentUser:null
}

//Here is the params we are passing a default value so state has one when we start up, so its never undefined
const userReducer = (state = INITIAL_STATE,action) =>{

    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return{
                ...state, // grab the state and ..
                currentUser:action.payload // change the current user value to whats coming in through the payload 
            }

        //return the state whether or not we get a relevant action coming in
        default:
            return state;

    }


}

export default userReducer;