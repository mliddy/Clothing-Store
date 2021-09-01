import React from 'react'

// Styling:
import { HeaderContainer,LogoContainer,OptionsContainer,OptionDiv,OptionLink } from './header.styles'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect' // quick way to access multiple selectors
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

//importing in connect as we want to be able to pull in our user object from the reducer, not from state 
// Before this HEader was getting the user from App.js. We don't want that.
import { connect } from 'react-redux' // connect is a higher order component to allow us modify our comp by having access to redux stuff

// Header component. Header, obviosuly. Contains the logo which we get from the crown.svg file
// which is imported in that syntax above. We use Link to link us back to the home page when it is clicked on
// The Options div contains the 2? options to click on in the top right corner of the page
// currentUser is passed as a prop from App.js so we can utilize the signin/out functionality
// Signin/out achieved by a terniary . If there is a currentUser then show SIGN OUT and onClick to the auth.signout()
// If there is not, then simply <Link/> to the signin page

const Header = ({ currentUser, hidden }) => {

    return (
        <HeaderContainer>
            <LogoContainer  to="/">
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink  to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink  to='/contact'>
                    CONTACT
                </OptionLink>
                {currentUser ?
                    <OptionDiv onClick={() => auth.signOut()}>
                        SIGN OUT
                    </OptionDiv>
                    :
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>

            {hidden ? null:<CartDropdown />}
            </HeaderContainer>
    )
}


// With connect() , pass it 2 fucntions, second optional, that will give us back another higher order component
// that we will pass it our header.
// The first argument we pass is the function(mapStateToProps) that allows us to access the state 
// - the state being our root reducer
// Root reducer has user, which has userReducer, which is the initial user state (currentUser). So initially
// we'll get the currentUser value of null. But we want it anyway.

// mapStateToProps => function tah treturns an object, where the name of the property of the property we want
// to pass in (in this case : currentUser) and the value will be the value?
// What we get, is the state object. The state is the root reducer(top level reducer).
// We are passing in a currentUser property wher ethe value will be the current state.user.currentUser.

//So i think all this shit is the way to grab the currentUser value from the reducers
// this combination of mapStateToProps and connect will be used whenever we need to
// grab props from reducers
// Now we are using selectors. In this case the createStructuredSelectr function. The familar way would look like:
        // const mapStateToProps = (state) => ({
        //     currentUser:selectCurrentUser(state),
        //     hidden:selectCartHidden(state)
        // })

// But using createSTructuredSelector now makes it look like:
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);
