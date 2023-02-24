import { EMAIL, LOGIN_FAILD, LOGIN_SUCCESS, PASSWORD, SUBMIT } from "./ActionTypes/ActionTypes"

const initialState = {
    email:'',
    password:'',
    password_error: false,
    email_error: false,
    loading: false,
    error_message:""
}
export const LoginReducer = (state = initialState, action) =>{
    switch (action.type) {
        // Email
        case EMAIL:
            if(action.payload){
                return{
                    ...state,
                    email : action.payload,
                    email_error: false 
                }
            }
            else{
                return{
                    ...state,email_error : true
                }
            }
        
        // password
        case PASSWORD:
            if(action.payload){
                return{
                    ...state,
                    password: action.payload,
                    password_error: false
                }
            }

            else{
                return{
                    ...state,
                    password_error: true
                }
            }
        
        // Submit 
        case SUBMIT:
            console.log("ttttt");
            return{
                ...state,loading:true
            }

        // Login loginSuccess
        case LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                email_error:false,
                password_error:false

            }

        // Login loginFaild
        case LOGIN_FAILD:
            return{
                ...state,
                loading: false,
                email_error:true,
                password_error:true,
                error_message:action.payload

            }
    
        default:
           return state;
    }
}