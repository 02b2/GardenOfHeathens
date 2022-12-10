import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/pages/About';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import WalkThrough from './components/pages/WalkThrough';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "About",
    element: <About/>,
  },
  {
    path: "WalkThrough",
    element: <WalkThrough/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
