import React, { useState } from 'react'
import './eact.css'

const Each = ({ idCategory, strCategory, strCategoryDescription,strCategoryThumb} ) => {

    const [readmore, setreadmore] =  useState(true)

    // onclick remore function
    const readMore=()=>{
        setreadmore(!readmore);
    }
  return (
    

        
          <div  className='EachItems' >
            <div className='EachImg' >
              <img src={strCategoryThumb} alt={strCategory} />
               </div>
               <div className='EachInfo' >
                <h1><b>{strCategory}</b></h1>
                <p>{ readmore?strCategoryDescription.substring(0,15):strCategoryDescription }    <span onClick={readMore} > {readmore?'ReadMore ...': 'Showless'}</span> </p>
               </div>

               </div>
       
      
    
  )
}

export default Each
