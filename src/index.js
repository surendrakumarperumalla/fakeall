import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import Features from './features';
import Prices from './prices';
import Details from './details';
import About from './about';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App> ,
    children:[
      {
        path:"",
        element:<Home></Home>

      },
      {
        path:"/ff",
        element:<Features></Features>

      },
      {
        path:"/pp",
        element:<Prices></Prices>

      },
      {
        path:"/dd",
        element:<Details></Details>

      },
      {
        path:"aa",
        element:<About></About>

      },
    ] 
  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
  <RouterProvider router={router} />
              
);
reportWebVitals();