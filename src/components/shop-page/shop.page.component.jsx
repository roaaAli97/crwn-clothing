import React from "react"
import shopData from "./shop.data.js"
import CollectionPreview from "../collection-preview/collection-preview.component"
class ShopPage extends React.Component{
    constructor(props){
     super(props)
     this.state=shopData
    }
    render(){
        return (
            <div>
            {shopData.map(({title,items})=>
              <CollectionPreview title={title} items={items}/>
            )}
           
        </div>
        )
        
    }
}
export default ShopPage