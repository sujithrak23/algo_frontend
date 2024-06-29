import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ExampleuseState from './Pages/ExampleuseState';
import ExpenseForm from './Pages/ExpenseForm.js';


const router = createBrowserRouter([
  {
  path: "/",
element:<App/>,
children: [
  {
    path: "/homepage",
    element:<HomePage/>,
  },
  {
    path: "/aboutpage",
    element: <AboutPage/>,
  },
  {
    path: "/example",
    element: <ExampleuseState/>,
  },
  {
    path: "/form",
    element: <ExpenseForm/>,
  },
  
  {
    path: "*",
    element: <div className="layout-container__wrapper">Page not found</div>,
  },
],
},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router =
    {router}></RouterProvider>
  </React.StrictMode>
);