import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

const CartDropdown = ({ cartItems, history, dispatch }) => ( // dispatch is available to props as default

    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ?
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                : <span className='empty-message'>Your cart is empty</span>
            }
        </div>

        <CustomButton onClick=
            {() => {
                history.push('/checkout');
                dispatch(toggleCartHidden()) // use dispatch to pass toggleCartHIdden so the pop out cart doesnt show
            }
            }
        >
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

//Using our selector now. So pass all of state to selector, get back just the cartItems
// Store that in our variable 'cartItems' for use in this component 
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

//wrap the connect by withROuter. withRouter is taking the component returned from connect as its input argument
export default withRouter(connect(mapStateToProps)(CartDropdown));
