import React from 'react'
import Portfolio from '../components/portfolio/Portfolio'
import Section2 from '../components/section2/Section2'
import '../pages/Scss/aboutclassik.scss'
import Logoabout from '../components/logosvg/about.jpg'
const Aboutclassic = () => {
  return (
    <div>
      <img src={Logoabout} />
      <Portfolio/>
     <Section2/> 
    </div>
  )
}

export default Aboutclassic