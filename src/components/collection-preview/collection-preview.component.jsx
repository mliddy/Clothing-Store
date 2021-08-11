import React from 'react'
import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

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
