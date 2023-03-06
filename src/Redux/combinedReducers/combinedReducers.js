import { combineReducers } from "redux";
import { LoginReducer } from "../Reducers/LoginReducer/LoginReducer";
import { AuthenticationReducer } from "../Reducers/AuthenticationReducer/AuthenticationReducer";
import { AddStudentReducer } from "../Reducers/AddStudent/AddStudentReducer";
// Combining all the reducers;
const CombinedReducers = combineReducers({LoginReducer,AuthenticationReducer,AddStudentReducer})
export default  CombinedReducers;