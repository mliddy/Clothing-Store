import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component' 
import { Route,Redirect } from 'react-router-dom' // Redirect needed for 119(user signed in - shouldnt see sign in page)
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component'
import { auth,createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect'




// App - the starting point of the application.
// Renders the HEader, then the "/" (root/home) by calling HomePage
// Provides the ROutes for the /shop,/signin pages
// Stores the state of the user in the app. We store that here so we can pass that authentification
// information down into components as needed
// The auth library from Firebase gives us the ability to keep track of the user who is logged in and 
// the sauthentification status. The componentDidMount is handling that. Setting the state for user
// to be whoever is logged in
// Auth will keep sending the authentificated user until they sign out so you can close the browser,refresh,etc
// Current user is passed to Header make sure our header knows a user is signed in or out
class App extends React.Component {

 

  // Subscription based auth system? need this to close/end subscription?
  unsubscribeFromAuth = null;

  //onAuthStateChanged returns a value every time the auth state changes
  //listens for authentification state changes on our firebase backend
  // The authentificated user object (userAuth) is returned. userAuth could be null if we are signed out
  // Then pass that user to createUSerProfileDocument() to store in the DB if necessary
  componentDidMount() {
    const{setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
 
      //Now we're checking to see if the snapshot from firebase has changed
      // The real use of this section though is that we'll get a snapshot of the DATA stored in our DB (.onSnapshot())
      // If statement because we dont want to set anything if the user is signed out 
      // Check to see if a user signs in (userAuth == true) then we'll get back a userRef object from createUser..
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth); // userRef returned from createUSerProf..
        //Get the data from the user if it was a new authentification or the current user that is signed in and in DB
        //onSnapshot() (which is a listener) gets us a snapshot of the data in our DB. Similar to onAuthStateChanged()
        userRef.onSnapshot(snapShot =>{
          //call setState to set our state(currentUser) with the values that we just got from the DB
          // Creating a new currentUSer object with the snapShot id (for id) and the data spread over for the rest
         // console.log(snapShot.data())   
          setCurrentUser({
                 id:snapShot.id,
                 ...snapShot.data()
               });
             });            
      }

      //If there is no userAuth(userLogs out), we still want to set currentUser to the null value
        setCurrentUser(userAuth);
    })
   
  }

  // When you unmount, close memory leaks. ca
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  // The signin Route says: if there is a props.currentUser(user signed in) don't let them access signin
  //, instead redirect to home. Otherwise, they can be at /signin
  render() {
    return (
      <div>
        <Header/>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path = '/checkout' component = {CheckoutPage}/>

        <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to ='/' />):(<SignInAndSignUp/>)} />
      </div>
    );
  }
}


// Needed for 119(user signed in - shouldnt see sign in page)
// accepts our user object,returns currentUser prop. Then we pass that to connect
// Now we are using selectors 
const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user)) 
})

//COnnecting our App to the outcome of our initial conmnect call using the second argument (dispatch) 
// mapStateToProps is there in order to get access to the user object from props (this.props.currentUser)
export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);
