import { combineReducers } from "redux";
import { LoginReducer } from "../Reducers/LoginReducer/LoginReducer";
import { AuthenticationReducer } from "../Reducers/AuthenticationReducer/AuthenticationReducer";
// Combining all the reducers;
const CombinedReducers = combineReducers({LoginReducer,AuthenticationReducer})
export default  CombinedReducers;