import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils'



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

  constructor(props){
    super();
    this.state = {
      currentUser:null
    }
  }

  // Subscription based auth system? need this to close/end subscription?
  unsubscribeFromAuth = null;

  //onAuthStateChanged returns a value every time the auth state changes
  //listens for authentification state changes on our firebase backend
  componentDidMount(){
  this.unsubscribeFromAuth=  auth.onAuthStateChanged(user =>{
      this.setState({currentUser:user});
      console.log(user)
    })
  }

  // When you unmount, close memory leaks. ca
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser} /> 
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </div>
    );
  }
}

export default App;
