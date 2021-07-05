import { combineReducers } from "redux";
import { apartmentReducer, userNameReducer,setRegionReducer,setTypeReducer,setMinPriceReducer } from "./Reducers";
import { setCategoryReducer,setMaxPriceReducer } from "./Reducers";

export const rootReducer = combineReducers({
    apartments : apartmentReducer,
    categoryBasic : setCategoryReducer,
    username : userNameReducer,
    region : setRegionReducer,
    type : setTypeReducer,
    minPrice : setMinPriceReducer,
    maxPrice : setMaxPriceReducer
})