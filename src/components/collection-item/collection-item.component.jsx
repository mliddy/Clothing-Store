import React from 'react'

import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.actions'

// Component to contain and present the individual item in the collection for sale.
// Accepts the parameters id,name,imageUrl,price from the shop.data file(SHOP_DATA) e.g:
//items: [
    // {
    //     id: 1,
    //     name: 'Brown Brim',
    //     imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
    //     price: 25
    //   },

// It creates the item whuch will be pulled into collection-preview as there are 4 displayed in that component at any one time    

const CollectionItem = ({item,addItem}) =>{
const{name,imageUrl,price} = item;

    return (
        <div className = 'collection-item'>
            <div className = 'image' 
            style = {{
                        backgroundImage: `url(${imageUrl})`
                    }}>
                {/* The backgroundImage is the imageUrl for the product */}
                    
            </div>
            <div className = 'collection-footer'>
                    <span className = 'name'>{name}</span>
                    <span className = 'price'>{price}</span>
            </div>
            <CustomButton onClick = {()=>addItem(item)}inverted>
                ADD TO CART
            </CustomButton>
        </div>
    )
}

// Function that gets a dispatch. Whenever there is an addItem, it will get an item in as a property
// Then we will dispatch our addItem action creator (addItem()), passing the item in
// We are creating this new fucntion which is a prop called (addItem), that will be passed into our CollectionItem
// as the addItem function that we need to leverage. Then whenever we actually dispatch(or call) this function,
// this function will receive the item as a property, pass it into our addItem action creator,
// which gives us back that object with the type and payload, then we will dispatch that new item into our store
// and it will go through our Redux flow

const mapDispatchToProps = dispatch =>({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);