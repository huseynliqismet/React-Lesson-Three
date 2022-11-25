import React from 'react'
import Portfolio from "../components/portfolio/Portfolio";
import './Scss/aboutme.scss'
import aboutme from'../components/logosvg/about.jpg';

const Aboutme = () => {
  return (
    <div>
<div className="aboutme-image">
<img src={aboutme}/>
<div className="image-content">
<h1>
  Hello ! <br/>
  I'm John Doe.
</h1>
<p>
Professional Developer :)
</p>

</div>
</div>

















         <Portfolio />
    </div>
  )
}

export default Aboutme