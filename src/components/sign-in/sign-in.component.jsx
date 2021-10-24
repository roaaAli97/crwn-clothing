import React from "react"

import FormInput from "../Form-Input/form-input.component"
import "./sign-in.styles.scss"
import CustomButton from "../Custom-button/custom-button.component"
import {signInWithGoogle} from "../../firebase/firebase.utils.js"

class SignIn extends React.Component{
    constructor(props){
      super(props)
      this.state={
          email:'',
          password:''
      }
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        this.setState({email:'',password:''})
    }
    handleChange=(event)=>{
      const {value,name}=event.target
      this.setState({
          [name]:value
      })
    }
  
    render(){
        return(
            <div className="sign-in">
            <h1>I already have an account</h1>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                
                <FormInput handleChange={this.handleChange} label="Email" name="email" type="email" required value={this.state.email}/>
            
                
                <FormInput handleChange={this.handleChange} label="Password" name="password" value={this.state.password} type="password" required/>
                <div className="btn-group">
                <CustomButton type="submit">Sign in</CustomButton>
                <CustomButton onClick={signInWithGoogle} signInWithGoogle={true}>Sign In with Google</CustomButton>
                </div>
            </form>

            </div>
        )
    }
}
export default SignIn