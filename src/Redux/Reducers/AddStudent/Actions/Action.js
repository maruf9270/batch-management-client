import { GURDIAN_NAME, GURDIAN_TOOGLE, NAME, NAME_ERROR } from "../ActionTypes/ActionTypes"

// Action for name 
export const name = (value) =>{
    return{
        type: NAME,
        payload: value
    }
}

export const name_error = () =>{
    return{
        type: NAME_ERROR,
        payload: true
    }
}

// Toogle between husbend and father 

export const gurdian_toogle = (prop) =>{
    return {
        type: GURDIAN_TOOGLE,
        payload: prop
    }
}

// Inserting gurdian name
export const gurdian_name = (prop) =>{
    return {
        type: GURDIAN_NAME,
        payload: prop
    }
}