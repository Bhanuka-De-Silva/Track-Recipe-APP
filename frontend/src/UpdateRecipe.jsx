import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateRecipe() {
    const {id} = useParams()
    const [recipeName, setRecipeName] = useState()
    const [ingredients, setIngredients] = useState()
    const [description, setDescription] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getRecipe/'+id)
        .then(result => {console.log(result)
            setRecipeName(result.data.recipeName)
            setIngredients(result.data.ingredients)
            setDescription(result.data.description)
        })
        .catch(err => console.error(err))
    }, [])

    const Update = (e) => {
        e.preventDefault()
        axios.put("http://localhost:3001/updateRecipe/"+id, {recipeName, ingredients, description})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Edit Recipe</h2>
                    <div className="mb-2">
                        <label htmlFor="">Recipe Name</label>
                        <input type="text" placeholder="Enter Recipe Name" className="form-control"
                        value={recipeName} onChange={(e) => setRecipeName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Ingredients</label>
                        <input type="text" placeholder="Enter Ingredients" className="form-control"
                        value={ingredients} onChange={(e) => setIngredients(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Description</label>
                        <input type="text" placeholder="Enter Description" className="form-control"
                        value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <button className="btn btn-success">Update</button>                    
                </form>
            </div>
        </div>
    )
}

export default UpdateRecipe;