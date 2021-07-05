import React from 'react'
import Slider from './Slider'
import Category from './Category'
import Availability from './Availability'
import AboutUs from './AboutUs'
import Apartments from './Apartments'
import Facts from './Facts'
import Contacts from './Contacts'


export default function Home() {
    return (
        <>
            <Slider />
            <Category />
            <Availability />
            <AboutUs />
            <Apartments />
            <Facts />
            <Contacts />
        </>
    )
}
