import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Apartments() {
    const apartments = useSelector(state => state.apartments)
    return (
        <div>
            <div className="apartments-area bg-gray-color">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-content-one border">
                                <h2 className="title">Otaqlar və mənzillər</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            apartments.slice(apartments.length-4,apartments.length).reverse().map(apartment => (
                                <div key={apartment.id} className="col-md-4 col-sm-6 col-xs-6">
                                    <div className="apartments-content">
                                        <div className="image-content">
                                            <Link to={`/apartment-single/${apartment.id}`}><img src={apartment.images[0].image} alt="apartment" /></Link>
                                        </div>

                                        <div className="text-content">
                                            <div className="top-content">
                                                <h3><Link to={`/apartment-single/${apartment.id}`}>{apartment.category}</Link></h3>
                                                <span>
                                                    <i className="fa fa-map-marker"></i>
                                                    {apartment.region}, {apartment.metro}
                                                </span>
                                            </div>
                                            <div className="bottom-content clearfix">
                                                <div className="meta-bed-room">
                                                    <i className="fa fa-bed"></i> {apartment.rooms} otaqlı
                                                </div>
                                                <div className="meta-bath-room">
                                                    <i className="fa fa-calendar"></i>{apartment.time}
                                                </div>
                                                <span className="clearfix"></span>
                                                <div className="rent-price pull-left">
                                                    {apartment.price}₼
                                                </div>
                                                <div className="share-meta dropup pull-right">
                                                    <ul>
                                                        <li className="dropup">
                                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-share-alt"></i></Link>
                                                            <ul className="dropdown-menu">
                                                                <li>
                                                                    <Link to="#"><i className="fa fa-facebook"></i></Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="#"><i className="fa fa-twitter"></i></Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="#"><i className="fa fa-instagram"></i></Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="#"><i className="fa fa-google-plus"></i></Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <Link to="#"><i className="fa fa-star-o"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <Link to="/all-apartment" className="button nevy-button">Bütün mənzillər</Link>
                </div>
            </div>
        </div>
    )
}
