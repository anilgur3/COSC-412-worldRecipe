import React from 'react';

const Form = props => (
    <form  className = "f-b"onSubmit = {props.getRecipe} style = {{marginBottom: "4rem"}}>
        <input className = "form__input" type ="text" placeholder ="Search Food" name = "recipeName"/>
        <button className = "form__button">Search</button>
    </form>
);

export default Form;