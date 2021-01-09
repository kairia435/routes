import React, { Component } from "react";
import photo1 from "./photo1.jpg";
class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fullName: "mchergui kairia",
          bio: "produit cosmetique",
          imgSrc: {photo1},
          profession: "student",
          Show: true,
          showHideDemo1: false
         
        };
      }

      

      render(){
        return (
          <div>
              
               <img src={photo1}  width="300px" height="300px" />
         <h1>My name is  {this.state.fullName}</h1>
         <p>
           Im a  {this.state.profession} and  I'm interested by  
           {this.state.bio}
            
           <div>  {this.props.compteur} </div>
         </p> </div>
             
              
        
              
          
      
        );
      }
        }

export default Demo1;