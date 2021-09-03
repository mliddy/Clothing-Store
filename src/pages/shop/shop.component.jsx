import React from 'react'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
// ShopPage acts as the container for the Shop Page(obviously)
// Contains the state for all the individual sale items: specific hats, jackets, etc
// Pulls that data in from a separate component called shop.data.js
// Maps through that collection and passes that data to CollectionPreview component
// ShopPage displays the CollectionPreview component, which gives the 4 item preview of the sale items
// CollectionPreview in turn calls to CollectionItem to get its item to display
// So its kinda like a recursive call. ShopPage needs CollectionPreview which in turn needs CollectionItem
// So CollectionItem gets passed up to CollectionPreview which gets passed up to ShopPage to be rendered on the page

import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions'

class ShopPage extends React.Component {

   // Following code is to Grab the shop data from the firebase store
   // Using componentDidMount to load upon starting app 
   

   // Return a collectionRef. Using that collectionRef, send the snapshot to the function
   // convertCOllectionsSnap... in firebase.utils where it will create an array of the data for us
   componentDidMount(){
      const{updateCollections} = this.props; // update collections is now coming from props? via mapDispatch..

      const collectionRef = firestore.collection('collections');
   this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
         updateCollections(collectionsMap);
      });
   }


   render(){

      const {match} = this.props;
        return(
           <div className = 'shop-page'>
              <Route exact path = {`${match.path}`}  component = {CollectionsOverview} />
              <Route path = {`${match.path}/:collectionId`} component = {CollectionPage}/>
           </div>
        )
        }
    }

    // As we are moving our data from firebase to front end to redux
const mapDispatchToProps = dispatch => ({
   updateCollections: collectionsMap => 
   dispatch(updateCollections(collectionsMap))
});

export default connect(null,mapDispatchToProps)(ShopPage);