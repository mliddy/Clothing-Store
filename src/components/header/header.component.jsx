import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'

// Header component. Header, obviosuly. Contains the logo which we get from the crown.svg file
// which is imported in that syntax above. We use Link to link us back to the home page when it is clicked on
 // The Options div contains the 2? options to click on in the top right corner of the page


const Header = () => {

    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className = 'option' to = '/shop'>
                    SHOP
                </Link>
                <Link className = 'option' to = '/contact'>
                    CONTACT
                </Link>

            </div>

        </div>
    )
}

export default Header;
