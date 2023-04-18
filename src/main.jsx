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
        element:<Inventory></Inventory>
      },
      {
      path:'checkout',
      element:<Checkout></Checkout>
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
        <RouterProvider router={router} />

  </React.StrictMode>,
)
