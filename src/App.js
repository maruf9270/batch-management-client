
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { found_user, getting_user } from './Redux/Reducers/AuthenticationReducer/Action/Action';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Redux/Reducers/AuthenticationReducer/AuthenticationReducer';


function App() {
  
  // This is for user info change on firebase
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getting_user())
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
        const current_user = user;
        dispatch(found_user(current_user))
    })

    return ()=> unsubscribe()
  },[dispatch])


  return (
    <RouterProvider router={router}>
    
    </RouterProvider>
  );
}

export default App;
