export const SET_CATEGORY = "SET_CATEGORY"
export const SET_USERNAME = "SET_USERNAME"
export const SET_REGION = "SET_REGION"
export const SET_TYPE = "SET_TYPE"
export const SET_MIN_PRICE = "SET_MIN_PRICE"
export const SET_MAX_PRICE = "SET_MAX_PRICE"

export const setcategoryAction = (payload)=>{
    return {
        type : SET_CATEGORY,
        payload
    }
}
export const setUsernameAction =(payload)=>{
    return {
        type : SET_USERNAME,
        payload
    }
}
export const setRegionAction = (payload)=>{
    return {
        type : SET_REGION,
        payload
    }
}
export const setTypeAction = (payload) =>{
    return {
        type : SET_TYPE,
        payload
    }
}
export const setMinPriceAction = (payload)=>{
    return {
        type : SET_MIN_PRICE,
        payload
    }
}
export const setMaxPriceAction = (payload)=>{
    return {
        type : SET_MAX_PRICE,
        payload
    }
}