
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
   <RouterProvider router={router}>
    
   </RouterProvider>
  );
}

export default App;
