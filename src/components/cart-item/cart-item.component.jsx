import React from 'react'
import './cart-item.styles.scss'

//Component to take deal with the items that are in the actual cart- as opposed to in the shop page
// Will have an image on the left and then the details displayed on teh right (name, price, qauntity) 

const CartItem = ({item:{imageUrl,price,name,quantity}}) =>{
    return(
    <div className = 'cart-item'> 
        <img src = {imageUrl} alt = 'item'/>
            <div className = 'item-details'> 
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>

    </div>
    )
}

export default CartItem;