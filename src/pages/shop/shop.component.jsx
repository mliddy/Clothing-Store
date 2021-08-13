import React from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

// ShopPage acts as the container for the Shop Page(obviously)
// Contains the state for all the individual sale items: specific hats, jackets, etc
// Pulls that data in from a separate component called shop.data.js
// Maps through that collection and passes that data to CollectionPreview component
// ShopPage displays the CollectionPreview component, which gives the 4 item preview of the sale items
// CollectionPreview in turn calls to CollectionItem to get its item to display
// So its kinda like a recursive call. ShopPage needs CollectionPreview which in turn needs CollectionItem
// So CollectionItem gets passed up to CollectionPreview which gets passed up to ShopPage to be rendered on the page

class ShopPage extends React.Component{

    constructor(){
        super();
        
        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
       const {collections} = this.state;

        return(
           <div className = 'shop-page'>
               {
                   collections.map(({id, ...otherCollectionProps}) =>
                    (
                        <CollectionPreview key = {id} {...otherCollectionProps}/>
                    )
                    )
               }
           </div>
        )
    }
}

export default ShopPage;