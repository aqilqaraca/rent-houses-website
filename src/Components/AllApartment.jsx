import React from 'react'
import Breadcrumb from './Breadcrumb'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import Availability from './Availability'
import { useDispatch } from 'react-redux'
import { setMaxPriceAction, setMinPriceAction, setRegionAction, setTypeAction } from '../Store.js/Actions'
import { setcategoryAction } from '../Store.js/Actions'

export default function AllApartment() {
    const apartments = useSelector(state => state.apartments)
    const [category, setCategory] = useState(false)
    const [selectCategory, setSelectCategory] = useState("all")
    const [filterApartment, setFilterApartment] = useState("time-new-to-old")
    const [apartmentsFiltered, setApartmentsFiltered] = useState(apartments)
    const [search, setSearch] = useState(false)
    const { categoryBasic } = useSelector(state => state.categoryBasic)
    const { region } = useSelector(state => state.region)
    const { type } = useSelector(state => state.type)
    const { minPrice } = useSelector(state => state.minPrice)
    const { maxPrice } = useSelector(state => state.maxPrice)
    const dispatch = useDispatch()


    useEffect(() => {
        window.scroll({ top: 0 })
    }, [])

    useEffect(() => {
        switch (selectCategory) {
            case "all":
                return setApartmentsFiltered(apartments);
            case "home":
                return setApartmentsFiltered(apartments.filter(apartment => apartment.category === "Yaşayış evləri"))
            case "building":
                return setApartmentsFiltered(apartments.filter(apartment => apartment.category === "Mənzillər"))
            case "ofice":
                return setApartmentsFiltered(apartments.filter(apartment => apartment.category === "Ofislər"))
            case "company":
                return setApartmentsFiltered(apartments.filter(apartment => apartment.category === "Şirkət binaları"))
            default:
                return setApartmentsFiltered(apartments);
        }
    }, [apartments,selectCategory])
    useEffect(() => {
        switch (filterApartment) {
            case "time-new-to-old":
                return setApartmentsFiltered(apartments.slice(0, apartments.length).reverse())
            case "time-old-to-new":
                return setApartmentsFiltered(apartments)
            case "price-higher-to-lower":
                return setApartmentsFiltered(apartments.sort((a, b) => (parseFloat(a.price) < parseFloat(b.price) ? 1 : -1)))
            case "price-lower-to-higher":
                return setApartmentsFiltered(apartments.sort((a, b) => (parseFloat(a.price) > parseFloat(b.price) ? 1 : -1)))
            default:
                return setApartmentsFiltered(apartments.sort((a, b) => (parseFloat(a.id) < parseFloat(b.id) ? 1 : -1)))

        }
    }, [apartments,filterApartment])
    useEffect(() => {
        region && setApartmentsFiltered(apartments.filter(apartment => apartment.region === region && apartment.category === type && parseInt(apartment.price) > parseInt(minPrice) && parseInt(apartment.price) < parseInt(maxPrice)))
        dispatch(setRegionAction(""))
        dispatch(setTypeAction(""))
        dispatch(setMinPriceAction(""))
        dispatch(setMaxPriceAction(""))
    }, [apartments,dispatch,maxPrice,minPrice,region,type])
    useEffect(()=>{
        categoryBasic && setApartmentsFiltered(apartments.filter(apartment =>apartment.category === categoryBasic))
        dispatch(setcategoryAction(""))
    },[apartments,dispatch,categoryBasic])
    return (
        <>
            <Breadcrumb />

            <div className="apartments-area four bg-gray-color">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {search && <Availability />}
                            <div className="apartment-tab-area">
                                <ul role="tablist" className="nav nav-tabs apartment-menu">
                                    <li className="active">
                                        <Link onClick={() => setFilterApartment("time-new-to-old")} role="tab" data-toggle="tab">Tarix<span>yenidən köhnəyə</span></Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => setFilterApartment("time-old-to-new")} role="tab" data-toggle="tab">Tarix <span>Köhnədən yeniyə</span> </Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => setFilterApartment("price-higher-to-lower")} role="tab" data-toggle="tab">Qiymət<span>Yuxarıdan aşağıya</span></Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => setFilterApartment("time-lower-to-higher")} role="tab" data-toggle="tab">Qiymət<span>Aşağıdan yuxarıya</span></Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => setSearch(!search)} role="tab" data-toggle="tab">Ətraflı axtarış</Link>
                                    </li>
                                    <li className={category ? "pull-right open" : "pull-right"}>
                                        <Link onClick={() => setCategory(!category)} role="tab" className="dropdown-toggle" data-toggle="dropdown">Category<i className="fa fa-angle-down"></i></Link>
                                        <ul className="dropdown-menu">
                                            <li><Link onClick={() => setSelectCategory("all")} >Hamısı</Link></li>
                                            <li><Link onClick={() => setSelectCategory("home")} >Yaşayış evləri</Link></li>
                                            <li><Link onClick={() => setSelectCategory("building")} >Mənzillər</Link></li>
                                            <li><Link onClick={() => setSelectCategory("ofice")} >Ofislər</Link></li>
                                            <li><Link onClick={() => setSelectCategory("company")} >Şirkət binaları</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div role="tabpanel" id="popular-apartment" className="tab-pane fade in active">
                                        <div className="row">
                                            {
                                                apartmentsFiltered.map(apartment => (
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
                                                                                <Link className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-share-alt"></i></Link>
                                                                                <ul className="dropdown-menu">
                                                                                    <li>
                                                                                        <Link ><i className="fa fa-facebook"></i></Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link ><i className="fa fa-twitter"></i></Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link ><i className="fa fa-instagram"></i></Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link ><i className="fa fa-google-plus"></i></Link>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                <Link ><i className="fa fa-star-o"></i></Link>
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
