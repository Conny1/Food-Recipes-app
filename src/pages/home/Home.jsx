import React from 'react'
import './home.css'
import Header from '../../components/header/Header'
import About from '../../components/about/About'
import Categories from  '../../components/categories/Categories'
import Photo from '../../components/photos/Photo'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <About  />
      <Categories/>
     
      <Photo/>
      <Footer/>
    </div>
  )
}

export default Home
