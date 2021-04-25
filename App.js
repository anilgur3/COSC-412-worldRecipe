import React, {Component} from 'react';
import './App.css';
import Form from "./components/Form";
import Recipes from  "./components/Recipes";
import {Link} from "react-router-dom";

const APP_ID = "86de1ec7";
const APP_KEY = "0fbe32ea1b522c5795a1b3966f742307	";
//`https://api.edamam.com/search?q=${recipeName}S&app_id=${APP_ID}&app_key=${APP_KEY}`

class App extends Component{
state = {
  hits: []
}

  getRecipe = async(e) =>{
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
   
    const api_call =await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    
    const data = await api_call.json();
    this.setState({hits: data.hits});
    console.log(this.state.hits);
    
  }
 
  render(){
    return (
      <div className ="App">
       <Link to ="./"> <header className = "App-header">
          <h1 className = "App-title" >
           <i className ="material-icons brand-icon">fastfood</i>Recipe Finder</h1>
        </header></Link>
        
        <Form getRecipe ={this.getRecipe} />
        <Recipes hits = {this.state.hits}/>
        
  </div>
       );
}

}
export default App;
    