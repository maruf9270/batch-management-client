import {getAuth} from 'firebase/auth'
import app from '../../../Firebase/Firebase.config'
const initialState ={
    user:''
}
export const AuthenticationReducer = (state = initialState,action) =>{
    const auth = getAuth(app)

    switch (action.type) {
        case 'fff':
            
           return state
    
        default:
            return state;
    }

}