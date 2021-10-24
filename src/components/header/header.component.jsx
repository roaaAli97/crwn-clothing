import React from "react"
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "../../assests/crown.svg"
import "./header.styles.scss"
import {auth} from "../../firebase/firebase.utils"


const Header=({currentUser})=>{
    return(
     <div className="navbar">
         <div class="logo">
            <Link to="/"><Logo/></Link>
         </div>
         <div className="options">
           <Link className="option" to="/shop">Shop</Link>
           <Link className="option" to="/contact">Contact</Link>
          {currentUser?<div className="option" onClick={()=>auth.signOut()}>Sign out</div>:<Link className="option" to="/signin">Sign in</Link>}
         </div>
     </div>
    )
}

export default Header