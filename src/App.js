import React from 'react';
import './App.css';
import HomePage from "./components/homepage/homepage.component"
import { Switch,Route } from 'react-router-dom';
import ShopPage from "./components/shop-page/shop.page.component"
import Header from "./components/header/header.component"
import SignInAndSignUp  from './pages/sign-in-and-sign-up';
import {auth} from "./firebase/firebase.utils.js"
import {createUserProfileDocument} from "./firebase/firebase.utils"
class App extends React.Component{
  constructor(){
    super()
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth=null
  componentDidMount(){
    //onAuthStateChaned is a listener that listens to the state of the user (is the user signIn or not)
    
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async user=>{
      
      if(user){
         const userRef=await createUserProfileDocument(user)
         //onSnap shot is a listener that listens to changes hanppen to the data
         userRef.onSnapshot(snapShot=>{
          this.setState({
             currentUser:{
               id:snapShot.id,
               ...snapShot.data()
             }
          },()=>console.log(this.state))
         })
        
      }
      else{
        this.setState({
          currentUser:null
        })
      }
     
      
    })
    
    
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
render(){
  return (
    <div>
       <Header currentUser={this.state.currentUser}/>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/shop" component={ShopPage}/>
      <Route exact path="/signin" component={SignInAndSignUp}/>
    </Switch>
    </div>
   
  );
}
}

export default App;
