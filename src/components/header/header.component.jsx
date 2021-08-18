import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'

//importing in connect as we want to be able to pull in our user object from the reducer, not from state 
// Before this HEader was getting the user from App.js. We don't want that.
import {connect} from 'react-redux' // connect is a higher order component to allow us modify our comp by having access to redux stuff

// Header component. Header, obviosuly. Contains the logo which we get from the crown.svg file
// which is imported in that syntax above. We use Link to link us back to the home page when it is clicked on
// The Options div contains the 2? options to click on in the top right corner of the page
// currentUser is passed as a prop from App.js so we can utilize the signin/out functionality
// Signin/out achieved by a terniary . If there is a currentUser then show SIGN OUT and onClick to the auth.signout()
// If there is not, then simply <Link/> to the signin page

const Header = ({ currentUser }) => {

    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
            </div>

        </div>
    )
}


// With connect() , pass it 2 fucntions, second optional, that will give us back another higher order component
// that we will pass it our header.
// The first argument we pass is the function that allows us to access the state - the state being our root reducer
// Root reducer has user, which has userReducer, which is the initial user state (currentUser). So initially
// we'll get the currentUser value of null. But we want it anyway.

const mapStateToProps = state =>({
currentUser:state.user.currentUser
})
export default connect(mapStateToProps)(Header);
