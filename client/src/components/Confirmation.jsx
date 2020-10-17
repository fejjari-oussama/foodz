import React from "react"
import Axios from "axios"

class Confirmation extends React.Component{
    constructor(props){
        super(props)
           
    }
   
      handleClick(){
          
          let name = this.props.name;
          let adress = this.props.add;
          let phone = this.props.num;
          let total = this.props.total;
          let ordredFood = this.props.items;
          Axios.post("/api/order",{name,adress,phone,total,ordredFood})
          .then(response=>{
            console.log(response)
        })
        .catch(err=>{throw err})
      }
     
    
render(){

    return(
        <div>
           
            <h1>Checkout</h1>
            <li>Name:{this.props.name}</li>
            <li>Adress :{this.props.add}</li>
            <li>Phone Number :{this.props.num}</li>
            <li>Items Ordered :{this.props.items}</li>
            <li>Total :{this.props.total}</li>
            <h2>Dear Client we guarantee a great service and high quality food you're order will be delivered in no time we'll contact u,Thank you hopefully we see you again!  </h2>
            <button onClick={this.handleClick.bind(this)}>Click to Confirm!</button>
          
        </div>
    )
}
}
export default Confirmation;
