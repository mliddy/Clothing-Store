import React from 'react'

import './collection-item.styles.scss'
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

const CollectionItem = ({id,name,imageUrl,price}) =>{

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
        </div>
    )
}

export default CollectionItem;