import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom'
import { setMaxPriceAction, setMinPriceAction, setRegionAction, setTypeAction } from '../Store.js/Actions'




export default function Availability() {
    const [region,setRegion] = useState("")
    const [type,setType] = useState("")
    const [minPrice,setMinPrice] = useState("")
    const [maxPrice,setMaxPrice] = useState("")
    const [regionError,setRegionError] = useState(false) 
    const [minPriceError,setMinPriceError] = useState(false) 
    const [maxPriceError,setMaxPriceError] = useState(false) 
    const [btnDisable,setBtnDisabled] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    
    useEffect(()=>{
        if(region.length === 0){
            setRegionError(false)
            setBtnDisabled(true)
            
        }
        else if(region.length <= 5){
            setRegionError(true)
            setBtnDisabled(true)
            
        }
        else { 
            setRegionError(false)
            setBtnDisabled(false)
        }


        if(minPrice.length === 0){
            setMinPriceError(false)
            setBtnDisabled(true)
        }
        else if(minPrice.length < 2){
            setMinPriceError(true)
            setBtnDisabled(true)
        }
        else { 
            setMinPriceError(false)
            setBtnDisabled(false)
        }

        if(maxPrice.length === 0){
            setMaxPriceError(false)
            setBtnDisabled(true)
        }
        else if(maxPrice.length < 2){
            setMaxPriceError(true)
            setBtnDisabled(true)
        }
        else { 
            setMaxPriceError(false)
            setBtnDisabled(false)
        }

    },[region,type,minPrice,maxPrice])

    const sendSearch = (e)=>{
            e.preventDefault()
            if(type.length > 4){
            dispatch(setRegionAction(region))
            dispatch(setTypeAction(type))
            dispatch(setMinPriceAction(minPrice))
            dispatch(setMaxPriceAction(maxPrice))
            history.push("/all-apartment")
            }
            
        
    }

    return (
        <>    
            <div className="availability-area bg-white-smoke">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-content-three">
                                <h2 className="title">??trafl?? axtar????</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <form>
                                <div className="form-content">
                                    <div className="form-group">
                                        <label>Rayon v?? q??s??b??l??r</label>
                                        <input type="text" name="FirstName" placeholder="Harada ya??amaq ist??yirs??n ?" value={region} onChange={(e)=>setRegion(e.target.value)}/>
                                        {regionError && <span className="cd-error-message is-visible" style={{color:'red'}}>5 h??rfd??n b??y??k olmal??d??r</span>}
                                    </div>
                                    <div className="form-group">
                                        <label>??mlak n??v??</label>
                                        <select value={type} onChange={(e)=>setType(e.target.value)}>
                                            <option defaultValue>...</option>
                                            <option >Ya??ay???? evl??ri</option>
                                            <option >M??nzill??r</option>
                                            <option >Ofisl??r</option>
                                            <option >??irk??t binalar??</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Q??YM??T</label>
                                        <input type="text" name="FirstName" placeholder="min" value={minPrice} onChange={(e)=>setMinPrice(e.target.value)}/>
                                        {minPriceError && <span className="cd-error-message is-visible" style={{color:'red'}}>2 r??q??md??n b??y??k olmal??d??r</span>}
                                    </div>
                                    <div className="form-group">
                                        <label style={{visibility:'hidden'}}>x</label>
                                        <input type="text" name="FirstName" placeholder="max" value={maxPrice} onChange={(e)=>setMaxPrice(e.target.value)}/>
                                        {maxPriceError && <span className="cd-error-message is-visible" style={{color:'red'}}>2 r??q??md??n b??y??k olmal??d??r</span>}
                                    </div>
                                    <input disabled={btnDisable} type="submit" onClick={sendSearch} className="button nevy-button searchButton" value="Axtar"/>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
