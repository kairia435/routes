
import './App.css';

import Profil from "./Profil";
import photo1 from "./photo1.jpg";
import React, { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "mchergui kairia",
          bio: "produit cosmetique",
          imgSrc: {photo1},
          profession: "student",
      showHide: false,
      cnt:0,
      
    };
    this.hideComponent = this.hideComponent.bind(this);
  }
  componentDidMount() {
   
    setInterval( () =>this.setState({cnt:this.state.cnt+1}), 1500);
 }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHide":
        this.setState({ showHide: !this.state.showHide });
        break;
      
       // null;
    }
  }

  render() {
    const { showHide } = this.state;
    return (
      <div>
        {showHide && <Profil  compteur={this.state.cnt}/>}
        <hr />
      
        
        <div>
          <button onClick={() => this.hideComponent("showHide")}>
            appear profile
          </button>
          
        </div>
      </div>
    );
  }
}
      

export default App;
