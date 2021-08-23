import React from 'react'
import './cart-icon.styles.scss'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

const CartIcon = ({toggleCartHidden,itemCount}) =>{
    return(

        <div className = 'cart-icon' onClick = {toggleCartHidden}>
            <ShoppingIcon className = 'shopping-icon'/>
            <span className = 'item-count'>{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

//Function to count the total quantity and display in the icon
// Using selector now (memoization/caaching). Pass state as prop.
// selectCartItemsCount will scan through, add up quantity and return(or return cached value if state hasnt changed)
const mapStateToProps = (state) =>({
    itemCount: selectCartItemsCount(state)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(CartIcon);