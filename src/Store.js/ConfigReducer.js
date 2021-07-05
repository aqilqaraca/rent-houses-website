import { createStore } from "redux";
import { rootReducer } from "./CombineReducer";
import { devToolsEnhancer } from "redux-devtools-extension";

export const store = createStore(rootReducer,devToolsEnhancer())