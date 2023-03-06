import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Bigspinner from '../components/LoaderSpinner/BigSpinner';

const ProtectedFromLoggedIn = ({children}) => {
    
    const AuthenticationReducer = useSelector((state)=>state.AuthenticationReducer)
    const userLoading = AuthenticationReducer.loading
    const user = AuthenticationReducer.user
    const navigate = useNavigate()

    let content 
    
    if(userLoading){
        content = <Bigspinner></Bigspinner>
    }

    if(!userLoading && user){
        
        content = navigate('/')
    }

    if(!userLoading && !user){
        content = children

    }

    
        
    
    return (content)
     }

export default ProtectedFromLoggedIn;