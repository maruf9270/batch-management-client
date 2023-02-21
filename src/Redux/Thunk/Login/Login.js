import { loginFaild, loginSuccess, submit } from "../../Reducers/LoginReducer/Actions/Actions"

export const LoginSubmit = () =>{
    return async (dispatch,getState)=>{
        dispatch(submit());
        const loading = getState().LoginReducer.loading
        // Api call
        const user = ''
        const message = ""
        if (user.uid){
            dispatch(loginSuccess())
        }

        else{
            if(!loading){
                dispatch(loginFaild(message))
                return
            }
            return
        }

    }
}