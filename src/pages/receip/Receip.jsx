import React, { useEffect, useState } from 'react'
import './receip.css'
import {FetchData} from '../../utils/FetchData'
import EachRecipe from './EachRecipe/EachRecipe'
import Footer from '../../components/footer/Footer'
import { NavLink } from 'react-router-dom'
const  url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
const  url2 = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous'


const Receip = () => {
  const [category, setcategory] = useState([])
  const [defaultcategory, setDefault] = useState(false)
  const [meals, setMeals] = useState([])
// fetching data
  const getData= async ()=>{
    let data = await FetchData(url)
    setcategory(data.data.categories)

  }
   // get selected category
  const selectedCategory=  async (item)=>{
    const datacategory = await FetchData(defaultcategory?`https://www.themealdb.com/api/json/v1/1/filter.php?c=${item}`:url2  )
    // console.log(datacategory.data.meals)
    setMeals(datacategory.data.meals)
     
    
setDefault(true)
  }


  useEffect(()=>{
    getData()
    selectedCategory()
    // console.count ('Recipes')

    return (()=> {setMeals([])
    
    } )

  }, [], [url])
  
 
  


    return (
      <>
      <NavLink to= '/' className='honevav' >Home</NavLink>
    <div className='Recipes' >
      <div className='categoryBtn' >
        {
          category.map((btn)=>{
            const { strCategory, idCategory } = btn;
            return <button onClick={()=>{selectedCategory(strCategory)}}  key={idCategory} > {strCategory} </button> 
          })
        }
      </div>

      <div className='Dishes' >
      {
        meals?.map((item, index)=>{
          return <EachRecipe key={index} {...item} />
        })
      }
      </div>
<Footer/>
      
    </div>
    </>
  )
}

export default Receip
