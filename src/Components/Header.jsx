import React, { useState } from 'react'
import { Link } from 'react-router-dom'



export default function Header() {
    const [mobileMenu, setMobilMenu] = useState(false)
    const loginUsername = localStorage.getItem('username')
    function exit(){
        localStorage.setItem('username',"")
        window.location.reload()
    }
    return (
        <>
            <header className="mobile-header-area bg-nero hidden-md hidden-lg ">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 tb">
                            <div className="mobile-header-block">
                                <div className="menu-area tb-cell">
                                    <div className="mobile-menu-main hidden-md hidden-lg">
                                        <div className="menucontent overlaybg"></div>
                                        <div className="menuexpandermain slideRight">
                                            <Link id="navtoggole-main" onClick={() => setMobilMenu(!mobileMenu)} className={mobileMenu ? "animated-arrow slideLeft menuopen" : "animated-arrow slideLeft menuclose"}>
                                                <span></span>
                                            </Link>
                                            <span id="menu-marker"></span>
                                        </div>
                                        <div id="mobile-main-nav" className={mobileMenu ? "main-navigation slideLeft menuopen" : "main-navigation slideLeft "}>
                                            <div className="menu-wrapper">
                                                <div id="main-mobile-container" className="menu-content clearfix"></div>
                                                <div className="left-content">
                                                    <ul>
                                                    <li>
                                                            <Link to="/">Ana Səhifə</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/all-apartment">Bütün mənzillər</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/contact">Əlaqə</Link>
                                                        </li>
                                                        <li>
                                                            {!loginUsername ? <Link to="/register" className="cd-signin"><i className="fa fa-user"></i>Giriş / Qeydiyyat</Link>
                                                                :
                                                                <Link>{loginUsername}</Link>
                                                            }
                                                        </li>
                                                        {loginUsername && <li onClick={exit} style={{ marginLeft: '15px' }}> <Link>Çıxış</Link> </li>}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="logo-area tb-cell">
                                    <div className="site-logo">
                                        <Link to="/">
                                            <img style={{ padding: '10px 0' }} src="assets/images/logo.png" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom-content bg-nero hidden-xs hidden-sm ">
                <div className="container">
                    <div className="row header-row">
                        <div className="col-md-3 col-sm-3 mobile-center">
                            <div className="site-logo">
                                <Link to="/">
                                    <img style={{ padding: '10px 0' }} src="assets/images/logo.png" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <nav id="main-nav" className="site-navigation top-navigation">
                                <div className="menu-wrapper">
                                    <div className="menu-content">
                                        <ul className="menu-list">
                                            <li>
                                                <Link to="/all-apartment">Bütün mənzillər</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">Əlaqə</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="col-md-3 col-sm-3 mobile-center">
                            <div className="left-content">
                                <ul style={{ display: 'flex' }}>
                                    <li>
                                        {!loginUsername ? <Link to="/register" className="cd-signin"><i className="fa fa-user"></i>Giriş / Qeydiyyat</Link>
                                            :
                                            <Link>{loginUsername}</Link>
                                        }
                                    </li>
                                    {loginUsername && <li onClick={exit} style={{ marginLeft: '15px' }}> <Link>Çıxış</Link> </li>}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
