import React, {  useState } from 'react'
import './eachrecipe.css'
import { FetchData } from '../../../utils/FetchData'
import {   BsFillXSquareFill } from "react-icons/bs";

const EachRecipe = ({idMeal, strMeal, strMealThumb }) => {
    const [viewrecipe, setViewrecipe] = useState(false)
    const [useId, setUseid] = useState([])


    
    
    const recipeinformation= async(val)=>{
        let data = await FetchData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${val}`);
    
        setUseid( data.data.meals?.[0])
        setViewrecipe(!viewrecipe)
        
    }
    
   
  return (
    <>
   {
    viewrecipe &&  <div className='recipeFormat' >
    <BsFillXSquareFill className='mealButton' onClick={()=>{setViewrecipe(!viewrecipe)}} />
    <div className='recipeFormat_ifo' >
        <div className='recipeFormat_ifo_image' >
            <img src={useId?.strMealThumb} alt={useId?.strMeal} />
        </div>
        <div className='ingri_Procedure' >
            <div className='ingridients' > 
                <p>{useId?.strIngredient1 }</p>
                <p>{useId?.strIngredient2 }</p>
                <p>{useId?.strIngredient3  }</p>
                <p>{useId?.strIngredient4  }</p>
                <p>{useId?.strIngredient5  }</p>
                <p>{useId?.strIngredient6  }</p>
                <p>{useId?.strIngredient7  }</p>
                <p>{useId?.strIngredient8  }</p>
                <p>{useId?.strIngredient9  }</p>
                <p>{useId?.strIngredient10  }</p>
                <p>{useId?.strIngredient11  }</p>
                <p>{useId?.strIngredient12  }</p>
                <p>{useId?.strIngredient13  }</p>
                <p>{useId?.strIngredient14  }</p>
                <p>{useId?.strIngredient15  }</p>
                <p>{useId?.strIngredient16  }</p>
                <p>{useId?.strIngredient17  }</p>
                <p>{useId?.strIngredient18  }</p>
                <p>{useId?.strIngredient19  }</p>
                <p>{useId?.strIngredient20  }</p>
            
            </div>
            <div className='procedure'>
                <p>{useId?.strInstructions}</p>
                <div className='linkprocedure' >
                <a className='blink-1'  href={useId?.strYoutube} target="_blank" rel="noopener noreferrer" >Video Procedure</a> <br />
                <a className='blink-1' href={useId?.strSource} target="_blank" rel="noopener noreferrer" > More About this meal</a>
            </div>
    
            </div>
           
        </div>
    </div>
        
    </div>
   }
    <div className='meals' onClick={()=>{recipeinformation(idMeal)}} >
        <div className='mealimage' >
            <img src={strMealThumb} alt={strMeal} />
        </div>
        <p>{strMeal} <br /> <span className='blink-1' >Click to see Recipe</span> </p>

      
    </div>
    </>
  )
}

export default EachRecipe
