import { createStore,combineReducers } from "redux";
import counterreducer from "./counterreducer";
import todoreducer from "./todoreducer";
 var store=createStore(combineReducers({counterreducer,todoreducer}))
 export default store;