import React from 'react'
import './checkout-item.styles.scss'
import { connect } from 'react-redux'
import { clearItemFromCart,addItem,removeItem } from '../../redux/cart/cart.actions'

const CheckoutItem = ({ cartItem, clearItem, addItem,removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick = {()=>removeItem(cartItem)} >&#10094;</div>
                <span className = 'value'>{quantity}</span>
                <div className='arrow' onClick = {()=>addItem(cartItem)} >&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)} >&#10006;</div>


        </div>
    )
}

//mapDispatchToProps as we are sending data TO the store (firing action to change something in the store)
// Gets dispatch from the redux store. Then we will return our new clear item
// I think: We are dispatching clearItemFromCart to Redux, passign in item as the argument
// clearItem is a function we are creating and defining in the mapDispatch.
// We are then addign it as a prop and calling it in the onClick(), passing it cartItem, which we are also getting from props

const mapDispatchToProps = (dispatch) => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);