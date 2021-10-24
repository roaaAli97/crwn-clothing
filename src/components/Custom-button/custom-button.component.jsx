import React from "react"
import "./custom-button.styles.scss"
const CustomButton=({children,signInWithGoogle,...otherProps})=>{
  return (
      <div>
       <button className={`${signInWithGoogle?'google-btn':''} custom-button`} {...otherProps}>{children}</button>
      </div>
  )
}

export default CustomButton
