import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Breadcrumb() {
    const location = useLocation()
    const [breadcrumbHeader,setBreadcrumbHeader] = useState("")
    useEffect(()=>{
        switch(location.pathname){
            case "/all-apartment":
                return setBreadcrumbHeader("Bütün mənzillər")
            case "/contact":
                return setBreadcrumbHeader("Əlaqə")
            case "/register" :
                return setBreadcrumbHeader("Giriş / Qeydiyyat")
            default :
                return setBreadcrumbHeader("Ana səhifə")
                     
        }
    },[location.pathname])
    return (
        <>
            <div className="page-header default-template-gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="page-title">
                                {
                                    breadcrumbHeader
                                }
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadcrumbs-area bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="breadcrumbs">
                                <span className="first-item">
                                    <Link to="/">Ana səhifə</Link></span>
                                <span className="separator"> &gt; </span>
                                <span className="last-item">{breadcrumbHeader}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
