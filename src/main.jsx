import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shope from './copmonents/Shop/Shope';
import Home from './copmonents/Layout/Home';
import Orders from './copmonents/Orders/Orders';
import Inventory from './copmonents/Inventory/Inventory';
import Login from './copmonents/Login/Login';
import cartProductsLoader from './Loaders/CartProductsLoader';
import Checkout from './copmonents/Checkout/Checkout';
import SignUp from './copmonents/SignUp/SignUp';
import AuthProvider from './copmonents/providers/AuthProvider';
import PrivateRouts from './copmonents/routes/PrivateRouts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shope></Shope>
      },
      {
        path:'orders',
        element:<Orders></Orders>,
        loader:cartProductsLoader
      },
      {
        path:'inventory',
        element:<PrivateRouts><Inventory></Inventory></PrivateRouts>
      },
      {
      path:'checkout',
      element:<PrivateRouts><Checkout></Checkout></PrivateRouts>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'signup',
        element:<SignUp/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <AuthProvider>
        <RouterProvider router={router} />
        </AuthProvider>

  </React.StrictMode>,
)
