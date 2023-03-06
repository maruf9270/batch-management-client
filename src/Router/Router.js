import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/Login/Login";
import NewStudent from "../pages/New_student/NewStudent";
import SiginUp from "../pages/Sign-up/SiginUp";
import ProtectedFromLoggedIn from "../ProtectedRoute/ProtectedFromLoggedIn";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Homepage></Homepage>
            },
            {
                path:'/add-student',
                element: <NewStudent></NewStudent>
            },
            {
                path:'/signup'
                ,element:<SiginUp></SiginUp>
            },
            {
                path:'/login'
                ,element:<ProtectedFromLoggedIn><Login></Login></ProtectedFromLoggedIn>
            }
        ]
    }

])

export default router;