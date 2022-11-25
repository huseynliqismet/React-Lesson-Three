import React from 'react'
import { Container } from 'react-bootstrap'
import './portfolio.scss'
import Image from '../logosvg/image3.jpg'
const Portfolio = () => {
  return (
    <div className="portfolio">
        <Container>
            <div className="row">
                <div className="col-12">
                    <div className="section-title mb-30 text-center">
                        <span>Our project</span>
                        <h2>Some of our Recent Works</h2>
                        <p>There are many variations of passages of Lorem Ipsum available,<br/> but the majority have suffered alteration.</p>
                    </div>
                </div>
            </div>
            <div className="single-portfolio">
        <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6 col-12">
                <div className="portfolio2">
                    <div className="thumbnail-inner">
                    <div className="thumbnail-image">
  <img src={Image}/>
                    </div>
                    </div>
                    <div className="content">
                        <div className="inner">
                            <p>Development</p>
                            <h4>Game Developer</h4>
                            <div className="portfolio-button">
                                <button>
                                    Case Styde
                                </button>
                            </div>
                        </div>
                    </div>
                  

                </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 col-12">
                <div className="portfolio2">
                    <div className="thumbnail-inner">
                    <div className="thumbnail-image">
  <img src={Image}/>
                    </div>
                    </div>
                    <div className="content">
                        <div className="inner">
                            <p>Development</p>
                            <h4>Game Developer</h4>
                            <div className="portfolio-button">
                                <button>
                                    Case Styde
                                </button>
                            </div>
                        </div>
                    </div>
                  

                </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 col-12">
                <div className="portfolio2">
                    <div className="thumbnail-inner">
                    <div className="thumbnail-image">
  <img src={Image}/>
                    </div>
                    </div>
                    <div className="content">
                        <div className="inner">
                            <p>Development</p>
                            <h4>Game Developer</h4>
                            <div className="portfolio-button">
                                <button>
                                    Case Styde
                                </button>
                            </div>
                        </div>
                    </div>
                  

                </div>
            </div>
        </div>
            </div>
        </Container>
    </div>
  )
}

export default Portfolio