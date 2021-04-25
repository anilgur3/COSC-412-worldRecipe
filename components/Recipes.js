import React from 'react';
import {Link} from "react-router-dom";


const Recipes = props => (
    <div className = "container">
        <div className = "row">
        { props.hits.map((recipe) =>{
            return(
                <div key ={recipe.recipe.label}className =".col-md-3 card  card-body " style = {{marginBottom: "2 rem"}}>
                 <div className =" .recipes__box ">
                   <img className = "img-fluid w-70 mx-auto "src ={recipe.recipe.image}
                        alt ={recipe.recipe.label} />
                        <div className = "recipe__text">
                            <h5 className = "recipes__title">
                                {recipe.recipe.label.length < 20 ? `${recipe.recipe.label}` : // to shorten the Name
                                `${recipe.recipe.label.substring(0, 25)}...`}
                                </h5>
                            
                                
                            </div>
                            <button className = "recipe_buttons">
                                <Link to = {{
                                    pathname: `/recipe/${recipe.recipe.calories}`,
                                     state: { recipe: recipe.recipe.label}
                            }}>View</Link>
                                </button>
                   </div>
                   </div>
            );
        })}
        </div>
    </div>
);
export default Recipes;