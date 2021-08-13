import React from 'react'
import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

// CollectionPreview component. receives item data as props from ShopData component(which holds state)
// Creates a 4 item preview for each of the categories(HATS,SNEAKERS,)
// So title, refers to 'HATS', etc. Then it maps through the 5 categories, passing the item data (for 4 items?)
// to CollectionItem to create the actual individual Item for rendering on the page  

const CollectionPreview = ({title,items}) =>{
//The crazy map/filter is making sure we only have 4 items at a time
// So we are filtering so that we have 4, then performing a map() on those 4

    return(
        <div className = 'collection-preview'>
            <h1>{title.toUpperCase()}</h1>
            <div className = 'preview'>
                {
                items
                .filter((item,idx) => idx<4)
                .map(({id,...otherItemProps}) => (
                    
                      <CollectionItem key = {id} {...otherItemProps} />   
                ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;
