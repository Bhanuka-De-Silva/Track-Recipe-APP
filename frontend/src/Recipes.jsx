import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Recipes() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(result => setRecipes(result.data))
        .catch(err => console.error(err))
    }, [])

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this recipe?");

        if (confirmDelete){
            axios.delete('http://localhost:3001/deleteRecipe/'+id)
                .then(res => {
                    console.log(res)
                    window.location.reload()})
                .catch(err => res.json(err))
        }
        
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/create" className="btn btn-success">Add a recipe</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Recipe Name</th>
                            <th>Ingredients</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recipes.map((recipe) => {
                                return <tr key={recipe._id}>
                                    <td><Link to={`/recipe/${recipe._id}`} className="btn btn-outline-none">{recipe.recipeName}</Link></td> 
                                    <td><Link to={`/recipe/${recipe._id}`} className="btn btn-outline-none">{recipe.ingredients}</Link></td>
                                    <td><Link to={`/recipe/${recipe._id}`} className="btn btn-outline-none">{recipe.description}</Link></td>
                                    <td>
                                        <Link to={`/update/${recipe._id}`} className="btn btn-success m-1">Edit</Link>
                                        <button className="btn btn-danger m-1"
                                        onClick={(e) => handleDelete(recipe._id)}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Recipes;