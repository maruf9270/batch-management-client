import {getAuth} from 'firebase/auth'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import app, { firebaseConfig } from '../../../Firebase/Firebase.config'
import { Authentication } from '../../Thunk/Authentication/Authentication'
import { FOUND_USER, GETTING_USER } from './ActionTypes/ActionTypes'
export const auth = getAuth(app)
const initialState ={
    user:'',
    loading:false
}
export const AuthenticationReducer = (state = initialState,action) =>{
  
    switch (action.type) {
        case GETTING_USER:
           return{
            ...state,
            loading:true
           }

        case FOUND_USER:
            return{
                ...state,
                loading:false,
                user:action.payload
            }
            
    
        default:
            return state;
    }

}

