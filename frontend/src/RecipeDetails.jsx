import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

{/* get recipe details */}
  useEffect(() => {
    axios.get(`http://localhost:3001/getRecipe/${id}`) 
      .then(result => setRecipe(result.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>; {/* id recipe details was not found */}
  }

  return (
    <div>
      <h2>{recipe.recipeName}</h2>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Description: {recipe.description}</p>
    </div>
  );
}

export default RecipeDetails;
