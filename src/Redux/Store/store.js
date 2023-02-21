import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import CombinedReducers from "../combinedReducers/combinedReducers";

// Providing all the datas to the stores
export const store = createStore(CombinedReducers,applyMiddleware(thunk))