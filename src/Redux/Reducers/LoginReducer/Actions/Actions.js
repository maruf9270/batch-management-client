import { EMAIL, LOGIN_FAILD, LOGIN_SUCCESS, PASSWORD, SUBMIT } from "../ActionTypes/ActionTypes"

export const  email = (email) =>{
    return {
        type: EMAIL,
        payload: email
    }
}

export const password = (password) =>{
    return{
        type: PASSWORD,
        payload: password
    }

}

export const submit = () =>{
    return{
        type: SUBMIT,
        payload: true
    }
}

export const loginSuccess = ( ) =>{
    return{
        type:LOGIN_SUCCESS,
        payload:""
    }
} 

export const loginFaild = (message) =>{
    return{
        type: LOGIN_FAILD,
        payload: message
    }
}