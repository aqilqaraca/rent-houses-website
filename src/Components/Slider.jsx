import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Slider() {
    const [slider,setSlider] = useState(true)
    return (
        <>
            <div className="slider-area">
                <div className="pogoSlider">
                    <div className="pogoSlider-slide" data-transition="expandReveal" data-duration="1000" style={slider ? {opacity: '1',zIndex: '1'} : null}>
                        <div className="container-slider one">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="slider-text-content">
                                        <h3 className="pogoSlider-slide-element" data-in="slideDown" data-out="slideUp" data-duration="500" data-delay="500">Lorem, ipsum dolor.</h3>
                                        <h2 className="pogoSlider-slide-element" data-in="slide-left" data-out="slideUp" data-duration="500" data-delay="500">Lorem ipsum dolor sit amet.</h2>
                                        <p className="pogoSlider-slide-element" data-in="slideDown" data-out="slideUp" data-duration="500" data-delay="500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sunt?</p>
                                        <Link to="#" className="button pogoSlider-slide-element" data-in="slideDown" data-out="slideUp" data-duration="500" data-delay="500">Xüsusi təklif</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pogoSlider-slide" data-transition="expandReveal" data-duration="1000" style={!slider ? {opacity: '1',zIndex: '1'} : null}>
                        <div className="container-slider one">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="slider-text-content">
                                        <h3 className="pogoSlider-slide-element" data-in="slideDown" data-out="slideUp" data-duration="500" data-delay="500">Lorem, ipsum dolor.</h3>
                                        <h2 className="pogoSlider-slide-element" data-in="slide-left" data-out="slideUp" data-duration="500" data-delay="500">Lorem ipsum dolor sit amet.</h2>
                                        <p className="pogoSlider-slide-element" data-in="slideDown" data-out="slideUp" data-duration="500" data-delay="500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nemo!</p>
                                        <Link to="#" className="button pogoSlider-slide-element" data-in="slideDown" data-out="slideUp" data-duration="500" data-delay="500">Xüsusi təklif</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={()=>setSlider(!slider)} className="pogoSlider-dir-btn pogoSlider-dir-btn--prev"></button>
                    <button onClick={()=>setSlider(!slider)} className="pogoSlider-dir-btn pogoSlider-dir-btn--next"></button>
                </div>
            </div>
        </>
    )
}
