import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from './Breadcrumb'

export default function ContactPage() {
    return (
        <>
            <div className="contact-us-area">
            <Breadcrumb/>
                <div className="container">
                    
                    <div className="row" style={{padding:'75px 0 90px'}}>
                        <div className="col-md-4">
                            <div className="contact-us-content-left">
                                <div className="contact">
                                    <h4><i className="fa fa-map-marker"></i>Address</h4>
                                    <p>Baku, Azerbaijan</p>
                                </div>

                                <div className="contact">
                                    <h4><i className="fa fa-envelope"></i>Mail</h4>
                                    <p>yourmail@gmail.com <br /> houserentmail@gmail.com</p>
                                </div>


                                <div className="contact">
                                    <h4><i className="fa fa-volume-control-phone"></i>Telefon</h4>
                                    <p>+994 0215469875 <br /> +994 358746920</p>
                                </div>

                                <div className="contact">
                                    <h4><i className="fa fa-user"></i>Sosial hesablarımız</h4>
                                    <div className="social-icon">
                                        <Link to="#"><i className="fa fa-facebook"></i></Link>
                                        <Link to="#"><i className="fa fa-twitter"></i></Link>
                                        <Link to="#"><i className="fa fa-instagram"></i></Link>
                                        <Link to="#"><i className="fa fa-google-plus"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="contact-us-content-right">
                                <form action="#">
                                    <h3>Sualın var ?</h3>
                                    <img src="assets/images/envelope.jpg" alt="envelope" />
                                    <div className="input-content clearfix">
                                        <h4>Bizə yaz</h4>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <input type="text" placeholder="Ad Soyad*" className="form-control" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="email" placeholder="Email*" className="form-control Email" />
                                            </div>
                                            <div className="col-md-12">
                                                <textarea rows="2" cols="80" placeholder="Mesajınız*"></textarea>
                                            </div>
                                        </div>
                                        <div className="subimt-button clearfix">
                                            <input type="submit" value="Göndər" className="submit default-template-gradient" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
