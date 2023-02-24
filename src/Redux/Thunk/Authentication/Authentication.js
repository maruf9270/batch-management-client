import { async } from "@firebase/util"
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { found_user, getting_user } from "../../Reducers/AuthenticationReducer/Action/Action"
import { auth } from "../../Reducers/AuthenticationReducer/AuthenticationReducer"

export const  Authentication = () =>{
    return async(dispatch,getState) =>{
       
    }
}

