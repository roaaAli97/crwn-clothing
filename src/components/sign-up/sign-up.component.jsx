import React from "react"
import FormInput from "../Form-Input/form-input.component"
import CustomButton from "../Custom-button/custom-button.component"
import { auth } from "../../firebase/firebase.utils"
import {createUserProfileDocument} from "../../firebase/firebase.utils"
import "./sign-up.styles.scss"
class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit=async (event)=>{
        event.preventDefault();
        const {email,password,displayName,confirmPassword}=this.state
        if(confirmPassword!==password){
            alert("Passwords don't match")
        }
        try{
        const {user}=await auth.createUserWithEmailAndPassword(email,password)
        await createUserProfileDocument(user,{displayName})
        this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        })
    }
    catch(error){
        console.log(error)
    }

    }
    handleChange=(event)=>{
      const {name,value}=event.target
      this.setState({[name]:value})
    }
    render(){
        const {displayName,email,password,confirmPassword}=this.state
        return(
            <div>
                <form className="sign-up" onSubmit={this.handleSubmit}>
                   <h2>Sign Up with Email and Password</h2>
                    
                    <FormInput onChange={this.handleChange} value={displayName} label="Name" name="displayName" type="text" required/>
                    <FormInput onChange={this.handleChange} value={email} label="Email" name="email" type="email" required />
                    <FormInput onChange={this.handleChange} value={password} label="Password" name="password" type="password"/>
                    <FormInput onChange={this.handleChange} value={confirmPassword} label="Confirm Password" name="confirmPassword" type="password"/>
                    <CustomButton>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp