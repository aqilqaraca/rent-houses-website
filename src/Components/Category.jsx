import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setcategoryAction } from '../Store.js/Actions'

export default function Category() {
    const dispatch = useDispatch()
    const home = ()=>{
        dispatch(setcategoryAction("Yaşayış evləri"))
    }
    const building = ()=>{
        dispatch(setcategoryAction("Mənzillər"))
    }
    const ofice = ()=>{
        dispatch(setcategoryAction("Ofislər"))
    }
    const company = ()=>{
        dispatch(setcategoryAction("Şirkət binaları"))
    }
    return (
        <>
            
            <div className="category-menu margin-less-top">
                <div className="container-fluid pd-zero">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="category-menu-content">
                                <div className="category-title">
                                    <h3><span>Təmin edirik</span></h3>
                                </div>
                                <div className="category-slider bg-white-smoke owl-carousel">
                                    <div className="item">
                                        <div className="category-list style-one">
                                            <Link onClick={home} to="/all-apartment"><img src="assets/images/category/category-one.png" alt="" />
                                                <h4>Yaşayış evləri</h4></Link>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="category-list style-one">
                                            <Link onClick={building} to="/all-apartment"><img src="assets/images/category/category-two.png" alt="" />
                                                <h4>Mənzillər</h4></Link>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="category-list style-one">
                                            <Link onClick={ofice} to="/all-apartment"><img src="assets/images/category/category-five.png" alt="category" />
                                                <h4>Ofislər</h4></Link>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="category-list style-one">
                                            <Link onClick={company} to="/all-apartment"><img src="assets/images/category/category-seven.png" alt="category" />
                                                <h4>Şirkət binaları</h4></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
