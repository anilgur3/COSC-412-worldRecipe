import React from 'react';
import {Link} from "react-router-dom";


const APP_ID = "86de1ec7";
const APP_KEY = "0fbe32ea1b522c5795a1b3966f742307";


 class Recipe extends  React.Component{
    state ={
        activeRecipe:[]
    }
    componentDidMount = async() => {
       const title = this.props.location.state.recipe;
       const req = await fetch(`https://api.edamam.com/search?q=${title}S&app_id=${APP_ID}&app_key=${APP_KEY}`);
    
    const res = await req.json();
    this.setState ({activeRecipe: res.hits[0].recipe});
       
    console.log(this.state.activeRecipe);
    }

   render(){
        console.log(this.props);
   const recipe = this.state.activeRecipe;
  
       return(
        
        <div className = "container"> 
        <div className = "back">
        <div className = "active-recipe">
            <img className = "active-recipe__img "  
           src = {recipe.image} 
          alt = {recipe.label}/>
         <h3 className = 'active-recipe__title'>{recipe.label}</h3>
         <h4 className = 'active-recipe__cuisineType'>
             Cuisine Type: <span>{recipe.cuisineType}</span> </h4>
             <p className = 'active-recipe__website'> Ingridents:
              <br></br>
              </p>
              <h6><ul >
                
                  <li>{recipe.ingredientLines}</li>
                
                
                </ul></h6>
           <span>  <a href = {recipe.url}> {recipe.url}</a></span>
           <br></br>
           <button className = 'active-recipe__button'> 
           <Link to ="/">HOME PAGE</Link>
           </button>
           
                </div>
        </div>
   
         </div> 
       
       );
   }  
 } ;
export default Recipe;