import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'

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

export default Header;
