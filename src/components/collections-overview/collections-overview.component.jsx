import React from 'react'
import './collections-overview.styles.scss'
import {connect} from 'react-redux'
import CollectionPreview from '../collection-preview/collection-preview.component'
import selectShopCollections from '../../redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect'

const CollectionsOverview = ({collections}) =>{

    return(
        <div className = 'collections-overview'>
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

const mapStateToProps = createStructuredSelector({
    collections:selectShopCollections
}) 

export default connect(mapStateToProps)(CollectionsOverview);
