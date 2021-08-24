import {createSelector} from 'reselect'

//Input selector: pass in whole state and only return the part odf state ou need(in this case: User)
const selectUser = state => state.user;

// This selctor is for the currentUser
// First argument can be an array of our input selectors (selectUSer)
// Second arg is the function grabbing what we want to return
export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
) 