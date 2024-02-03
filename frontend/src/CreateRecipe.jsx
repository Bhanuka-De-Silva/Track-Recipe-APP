import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateRecipe() {
    const [recipeName, setRecipeName] = useState()
    const [ingredients, setIngredients] = useState()
    const [description, setDescription] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createRecipe", {recipeName, ingredients, description})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h2>Add a Recipe</h2>
                    <div className="mb-2">
                        <label htmlFor="">Recipe Name</label>
                        <input type="text" placeholder="Enter Recipe Name" className="form-control"
                        onChange={(e) => setRecipeName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Ingredients</label>
                        <input type="text" placeholder="Enter Ingredients" className="form-control"
                        onChange={(e) => setIngredients(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Description</label>
                        <input type="text" placeholder="Enter Description" className="form-control"
                        onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <button className="btn btn-success">Submit</button>                    
                </form>
            </div>
        </div>
    )
}

export default CreateRecipe;