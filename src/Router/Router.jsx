import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import About from "../Pages/About";
import EventDetails from "../Pages/EventDetails";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Events from "../Pages/Events";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('/fakeData.json')
                
            },
            {
                path: '/about',
                element: 
                <PrivateRoute>
                    <About></About>
                </PrivateRoute>,
                loader: ()=>fetch('/fakeData.json') 
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
                loader: ()=>fetch('/fakeData.json') 
            },
            {
                path: '/login',
                element: <Login></Login>,
                
            },
            {
                path: '/registration',
                element: <Registration></Registration>,
                
            },
            {
                path: '/event',
                element: <PrivateRoute>
                    
                    <Events></Events>,
                    </PrivateRoute>
                
            },
            
        ]
    },
])

export default router;