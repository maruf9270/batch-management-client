import { FOUND_USER, GETTING_USER } from "../ActionTypes/ActionTypes"

export const getting_user = () =>{

    return{
        type:GETTING_USER,
        payload: true
    }
}

export const found_user = (user) =>{
    
    return{
        type:FOUND_USER,
        payload: user
    }
}

export const email_login = () =>{
    
}