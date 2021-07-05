import { initialValue } from "./initalValue"
import { SET_CATEGORY } from "./Actions";
import { SET_USERNAME } from "./Actions";
import {SET_REGION} from "./Actions"
import {SET_TYPE} from "./Actions"
import {SET_MAX_PRICE} from "./Actions"
import {SET_MIN_PRICE} from "./Actions"

const setCategoryInitalValue = {
    categoryBasic : ""
}
const Username = {
    username : ""
}
const Region = {
    region : ""
}
const Type = {
    type : ""
}
const minPrice = {
    minPrice : ""
}
const maxPrice = {
    maxPrice : ""
}

export const apartmentReducer = (state=initialValue,{type,payload})=>{
    return state;
}
export const setCategoryReducer = (state=setCategoryInitalValue,{type,payload}) =>{
    switch(type){
        case SET_CATEGORY :
        return {categoryBasic : payload}
        default : 
         return state;
    }
}
export const userNameReducer = (state=Username,{type,payload})=>{
    switch(type){
        case SET_USERNAME:
            return {username : payload}
        default : 
            return state
    }
}
export const setRegionReducer = (state=Region,{type,payload}) => {
    switch(type){
        case SET_REGION : 
            return {region : payload}
        default :
            return state
    }
}
export const setTypeReducer = (state=Type,{type,payload}) => {
    switch(type){
        case SET_TYPE : 
            return {type : payload}
        default :
            return state
    }
}
export const setMinPriceReducer = (state=minPrice,{type,payload}) => {
    switch(type){
        case SET_MIN_PRICE : 
            return {minPrice : payload}
        default :
            return state
    }
}
export const setMaxPriceReducer = (state=maxPrice,{type,payload}) => {
    switch(type){
        case SET_MAX_PRICE: 
            return {maxPrice : payload}
        default :
            return state
    }
}