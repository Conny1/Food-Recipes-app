import React, { useEffect, useState } from 'react'
import './Photo.css'
import img1 from '../../utils/images/01.jpg' 
import img2 from '../../utils/images/02.jpg' 
import img3 from '../../utils/images/03.jpg' 
import img4 from '../../utils/images/04.jpg' 
import img5 from '../../utils/images/05.jpg' 
import img6 from '../../utils/images/06.jpg' 
import img7 from '../../utils/images/07.jpg' 
const photos = [ img1, img2, img3, img4, img5, img6, img7]

const Photo = () => {
    const [photo, setPhoto] = useState(0);
    useEffect(()=>{
        const timer = setTimeout(() => {
            if (photo === photos.length-3){
                setPhoto(0)
            }else{
                setPhoto(photo + 1)
            }
            
        }, 1500);

        return ()=> clearTimeout(timer)
    }, [photo])

  return (
    <div className='photos' id='photo' >
      <div className='photos_info' >
        <p>Instagram</p>
        <h1>Photo Gallery</h1>
        <p className='info' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
      </div>
      <div className='photos_images' >
        <img src={photos[photo ]} alt="food" loading='lazy' />
        <img src={photos[photo + 1]} alt="food" loading='lazy' />
        <img src={photos[photo + 2]} alt="food" loading='lazy' />
      </div>
    </div>
  )
}

export default Photo
