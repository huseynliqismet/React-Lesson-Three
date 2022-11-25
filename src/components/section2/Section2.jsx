import React from 'react'
import './section2.scss'
import img from '../logosvg/video.mp4'

const Section2 = () => {
  return (
    <div className='video-2'>
         <video autoPlay loop muted className='video2'>
<source src={img} type="video/mp4" />
</video>
    </div>
  )
}

export default Section2