import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AboutUs() {
    const [aboutDesktop, setAboutDesktop] = useState("about-company")
    return (
        <>
            <div className="aboutus-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-content-one">
                                <h2 className="title">Haqqımızda</h2>
                                <h5 className="sub-title">Lorem ipsum dolor sit amet.</h5>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2">
                            <div className="tab-list">
                                <ul className="nav nav-tabs about-tab hidden-xs hidden-sm" role="tablist">
                                    <li onClick={() => setAboutDesktop("about-company")} role="presentation" className={aboutDesktop === 'about-company' ? "active" : null}><Link aria-controls="home" role="tab" data-toggle="tab">Şirkət haqqında</Link>
                                    </li>
                                    <li onClick={() => setAboutDesktop("role")} role="presentation" className={aboutDesktop === 'role' ? "active" : null}><Link aria-controls="profile" role="tab" data-toggle="tab">Qaydalar &amp; şərtlər</Link>
                                    </li>
                                    <li onClick={() => setAboutDesktop("our-work")} role="presentation" className={aboutDesktop === 'our-work' ? "active" : null}><Link aria-controls="messages" role="tab" data-toggle="tab">Bizim işimiz</Link></li>
                                </ul>
                                <form className="hidden-md hidden-lg">
                                    <select className="about-mobile">
                                        <option value='0'>Şirkət haqqında</option>
                                        <option value='1'>Qaydalar &amp; şərtlər</option>
                                        <option value='2'>Bizim işimiz</option>
                                    </select>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-10">
                            <div className="tab-content">
                                {aboutDesktop === 'about-company' ? <div role="tabpanel" className="tab-pane active row" id="home">
                                    <div className="col-md-6">
                                        <div className="text-content">
                                            <p>Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.</p>
                                            <ul>
                                                <li>Amorem ipsum dolor sit amet, consectetur </li>
                                                <li>Cras etitikis mauris egeth lorem ultricies</li>
                                                <li>Amorem ipsum dolor sit amet, consectetur </li>
                                                <li>Cras etitikis mauris egeth lorem ultricies</li>
                                                <li>Amorem ipsum dolor sit amet, consectetur </li>
                                                <li>Cras etitikis mauris egeth lorem ultricies</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="image-content">
                                            <img src="assets/images/about-image.png" alt="about" />
                                        </div>
                                    </div>
                                </div> : null
                                }

                                {aboutDesktop === 'role' ?
                                    <div role="tabpanel" className="tab-pane active row" id="profile">
                                        <div className="col-md-6">
                                            <div className="text-content">
                                                <p>Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.</p>
                                                <ul>
                                                    <li>Amorem ipsum dolor sit amet, consectetur </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="image-content">
                                                <img src="assets/images/about-image.png" alt="about" />
                                            </div>
                                        </div>
                                    </div> : null}

                                {aboutDesktop === 'our-work' ?
                                    <div role="tabpanel" className="tab-pane active row" id="messages">
                                        <div className="col-md-6">
                                            <div className="text-content">
                                                <p>Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.</p>
                                                <ul>
                                                    <li>Amorem ipsum dolor sit amet, consectetur </li>
                                                    <li>Cras etitikis mauris egeth lorem ultricies</li>
                                                    <li>Amorem ipsum dolor sit amet, consectetur </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="image-content">
                                                <img src="assets/images/about-image.png" alt="about" />
                                            </div>
                                        </div>
                                    </div>
                                    : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
