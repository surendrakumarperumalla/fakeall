import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Todos from './todo'
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import Products from './products';
import Carts from './carts';
import { Provider } from 'react-redux';
import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";
import Counter from './counter';
 const router = createBrowserRouter([
   {
     path: "/",
     element:<App></App>,
     children:[
      {
         path: "/a",
         element:<Counter></Counter>,
       },
       {
         path: "/b",
         element:<Todos></Todos>,
       },
       {
         path: "/c",
         element:<Products></Products>,
       },
       {
         path: "/d",
         element:<Carts></Carts>,
       },
   
   ]
   },
   
 ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <Provider store={store}>
     <RouterProvider router={router} />
   </Provider>
);
reportWebVitals();
