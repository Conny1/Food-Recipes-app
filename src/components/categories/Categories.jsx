import React, { useEffect, useState } from 'react'
import './categories.css'
import { FetchData } from '../../utils/FetchData'
import Each from './eachcategory/Each'

const  url = 'https://www.themealdb.com/api/json/v1/1/categories.php'

const Categories = () => {
  const [categories, setctegories]= useState([]);
  // getting data from api
  const getData= async()=>{
    let newdata = await FetchData(url);
    
    setctegories(newdata?.data?.categories)
  }

  useEffect(()=>{
    getData()
  },[])
  return (

    
    <>
    <h1 className='categoryTitle'>Categories of recipes</h1>
    <div className='categories'  id='category' >
      
      
        {
          categories.map((category,index)=>{
            return <Each key={index} {...category} />
          })
        }
      
      
     
      
    </div>
    </>
    
  )
}

export default Categories
