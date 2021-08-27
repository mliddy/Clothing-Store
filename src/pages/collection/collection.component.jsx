import React from 'react'
import './collection.styles.scss'
import {connect} from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item.component'
import {selectCollection} from '../../redux/shop/shop.selectors'

const CollectionPage = ({collection}) =>{
    return(
        <div className = 'collection-page'>
            <h2>CATEGORY PAGE</h2>
        </div>
    )
}

//From lesson 148
const mapStateToProps = (state,ownProps) =>({
collection:selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);