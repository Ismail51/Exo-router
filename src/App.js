import React from "react";
import Home from "./Components/Home";
import Produits from "./Components/Produits";
import {Route,Routes,Link} from "react-router-dom";
import Produit from "./Components/Produit"
class App extends React.Component {
    render(){
        return(

          <div App>
            <header>
              <nav>
              <Link to ="/">Accueil</Link>
              <Link to ="/produits">Liste</Link>
              </nav>
            </header>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/produits" element={<Produits></Produits>}></Route>
              <Route path="/produit/:productId" element={<Produit></Produit>}></Route>
            </Routes>
          </div>  
        )
    }
}
export default App 