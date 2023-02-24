import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../Redux/Reducers/AuthenticationReducer/AuthenticationReducer"

// Login with email and password
export const Login_with_password = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
}