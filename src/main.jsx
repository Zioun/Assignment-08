import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
import Details from './Components/Details/Details';
import Listed from './Components/Listed/Listed';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../books.json")
      },
      {
        path: "/details/:bookId",
        element: <Details></Details>,
        loader: () => fetch("../books.json")
      },
      {
        path: "/listed",
        element: <Listed></Listed>,
        loader: () => fetch("../books.json")
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
