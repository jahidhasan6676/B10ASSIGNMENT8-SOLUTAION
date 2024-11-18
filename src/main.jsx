import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayouts from './Layouts/MainLayouts';
import Statistics from './pages/Statistics';
import Dashboard from './pages/Dashboard';
import GadgetCards from './components/GadgetCards';
import ErrorPage from './components/ErrorPage';
import GadgetDetails from './components/GadgetDetails';
import CartList from './components/CartList';
import WishList from './components/WishList';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import CategoryError from './components/categoryError';
import About from './pages/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=> fetch("../category.json"),
        children:[
          {
            path:"/",
            element:<GadgetCards></GadgetCards>,
            loader:()=> fetch("../gadgets.json")
          },
          {
            path:"/gadgets/:category",
            element:<GadgetCards></GadgetCards>,
            loader:()=> fetch("../gadgets.json")
          },
          {
            path:"/gadgets/Chargers",
            element:<CategoryError></CategoryError>
            
          }
        ]
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/Dashboard",
        element:<Dashboard></Dashboard>,
        children:[
          {
            path:"/Dashboard",
            element:<CartList></CartList>,
            loader:()=> fetch("../gadgets.json")
          },
          {
            path:"/Dashboard/cart",
            element:<CartList></CartList>,
            loader:()=> fetch("../gadgets.json")
          },
          {
            path:"/Dashboard/wish",
            element:<WishList></WishList>,
            loader:()=> fetch("../gadgets.json")
          }
        ]
      },
      {
        path:"/gadgetDetails/:id",
        element:<GadgetDetails></GadgetDetails>,
        loader:()=> fetch("../gadgets.json")
      },
      {
        path:'/about',
        element:<About></About>
      }
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
   <ToastContainer />
  </StrictMode>,
)
