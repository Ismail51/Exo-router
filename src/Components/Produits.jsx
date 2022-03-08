import React from "react";
import axios from "axios";
import "../App.css"
import {Link} from "react-router-dom"

class Produits extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items : []
        }
    }
    componentDidMount = ()=>{
        axios("https://fakestoreapi.com/products/").then(result=>{
        this.setState({
            items:result.data
        })
    })
    }
    render(){
        return(
           <div className="item-list">{this.state.items.map(item =>{
               return(
                   <div className="card">
                       <img height="150px" src={item.image}/>
                       <p>{item.title}</p>
                       <p>{item.description}</p>
                       <p>{item.price}</p>
                       <Link to={`/produit/${item.id}`}>En savoir plus</Link>
                    </div> 
               )
           })}</div>
        )
    }
}
export default Produits