import React from 'react'
import { Link } from 'react-router-dom'

export default function Contacts() {
    return (
        <>
            <div className="contact-area">
                <div className="container-large-device">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="heading-content-two available">
                                    <h2 className="title">Sizin üçün<br />24/7 burdayıq</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7">
                                <div className="map-left-content">
                                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d194215.0655279403!2d50.025986413085896!3d40.483883413575576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1625047066260!5m2!1sen!2s" width="600" height="450"></iframe>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="map-right-content">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            <div className="contact">
                                                <h4><i className="fa fa-address-book"></i>Address</h4>
                                                <p>Baku, Azerbaijan</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="contact">
                                                <h4><i className="fa fa-envelope"></i>Mail</h4>
                                                <p>yourmail@domain.com houserent@domain.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            <div className="contact">
                                                <h4><i className="fa fa-phone-square"></i>Call</h4>
                                                <p>+994 0215469875 <br />+994 35874692050</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="contact">
                                                <h4><i className="fa fa-user-circle"></i>Sosial hesablarımız</h4>
                                                <div className="social-icon">
                                                    <Link to="#"><i className="fa fa-facebook"></i></Link>
                                                    <Link to="#"><i className="fa fa-twitter"></i></Link>
                                                    <Link to="#"><i className="fa fa-instagram"></i></Link>
                                                    <Link to="#"><i className="fa fa-google-plus"></i></Link>
                                                </div>
                                            </div>
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
