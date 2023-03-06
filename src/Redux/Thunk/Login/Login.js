import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Login_with_password } from "../../../FirebaseAuthentication/Login";
import { loginFaild, loginSuccess, submit } from "../../Reducers/LoginReducer/Actions/Actions"

export const LoginSubmit = () =>{
    return async (dispatch,getState)=>{
        dispatch(submit());
        const email = getState().LoginReducer.email
        const password = getState().LoginReducer.password;
        // Api call
        Login_with_password(email,password)
        .then(res=> {
            if(res){
                dispatch(loginSuccess(res))
                toast.success("Logged in successfully")
                if(res.user.uid){
                
                }
            }
        })
        .catch(error=>{
          dispatch(loginFaild("Invalid Login Credindital"))
          toast.error("Email or password is wrong")
        })

    }
}