import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../style.css'
import '../plugins.css'
import '../colors.css'
import '../custom.css'


export default function ApartmentSingle() {
    const { id } = useParams()
    const apartments = useSelector(state => state.apartments)
    const singleApartments = apartments.filter(apartment => apartment.id === parseInt(id))
    const images = singleApartments.map(apartment => apartment.images)[0]
    
    
    return (
        <>
            {
                singleApartments.map(singleApartment => (
                    <div key={singleApartment.id} className="apartment-single-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <OwlCarousel items={2} className="owl-theme" nav margin={8}>
                                        {
                                            images.map((image,index)=>(
                                                <div key={index}>
                                                    <img className="img" src={`../${image.image}`} alt="" />
                                                </div>
                                            ))
                                        }

                                    </OwlCarousel>

                                    <div className="family-apartment-content">
                                        <div className="tb">
                                            <div className="tb-cell">
                                                <h3 className="apartment-title">{singleApartment.category}</h3>
                                            </div>
                                            <div className="tb-cell">
                                                <p className="pull-right rent">Kirayə/Aylıq: ₼{singleApartment.price}</p>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <p className="apartment-description default-gradient-before">{singleApartment.description}</p>
                                        <div className="property-details" style={{marginTop:'35px'}}>
                                            <ul>
                                                <li><span>Region, Qəsəbə, Metro :</span> {singleApartment.region}, {singleApartment.metro}</li>
                                                <li><span>Sahəsi :</span> {singleApartment.area}m²</li>
                                                <li><span>Mərtəbə :</span> {singleApartment.floor} mərtəbə</li>
                                                <li><span>Otaq sayı :</span> {singleApartment.rooms} otaqlı</li>
                                                <li><span>Elan tarixi :</span> {singleApartment.time}</li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="hidden-md hidden-lg text-center">
                                        <span className="extend-icon">
                                            <i className="fa fa-angle-down"></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="apartment-sidebar">
                                        <div className="widget_rental_search clerafix">
                                            <div className="form-border gradient-border">
                                                <form className="advance_search_query booking-form">
                                                    <div className="form-bg seven">
                                                        <div className="form-content">
                                                            <h2 className="form-title">MƏNZİLƏ SİFARİŞ GÖNDƏR</h2>
                                                            <div className="form-group">
                                                                <label>Ad</label>
                                                                <input type="text" name="FirstName" placeholder="ad..." />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Telefon</label>
                                                                <input type="tel" name="phone number" placeholder="+994 12 345 67 89" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Email</label>
                                                                <input type="email" name="Email" placeholder="example@mail.com" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Aİlə üzvləri</label>
                                                                <input type="number" step="1" min="1" max="100" name="quantity" value="1" title="Qty" size="4" className="input-text" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Uşaqlar</label>
                                                                <input type="number" step="1" min="1" max="100" name="quantity" value="1" title="Qty" size="4" className="input-text" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Mesaj</label>
                                                                <textarea name="message" placeholder="mesaj..." className="form-controller"></textarea>
                                                            </div>
                                                            <div className="form-group">
                                                                <button type="submit" className="button default-template-gradient button-radius">SİFARİŞ GÖNDƏR</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
