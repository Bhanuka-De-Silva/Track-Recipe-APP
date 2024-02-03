import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import RecipeDetails from "./RecipeDetails";
import NavigationBar from './NavigationBar';
import Recipes from './Recipes'
import CreateRecipe from './CreateRecipe'
import UpdateRecipe from './UpdateRecipe'


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Recipes />} />
            <Route path="/create" element={<CreateRecipe />} />
            <Route path="/update/:id" element={<UpdateRecipe />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
