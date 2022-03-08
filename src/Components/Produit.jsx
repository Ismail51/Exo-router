import React from "react";
import { useParams } from "react-router-dom";
function withRouter(Component){
    return(props) =>{return <Component params={useParams()}{...props}/>}
}

class Produit extends React.Component {
    render(){
        return(
            <h2>
                {this.props.params.productId}
            </h2>
        )
    }
}

export default withRouter(Produit)