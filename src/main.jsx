import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
import Details from './Components/Details/Details';
import Listed from './Components/Listed/Listed';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Read from './Components/Read/Read';
import Author from './Components/Author/Authors';
import TopReatedBook from './Components/TopReatedBook/TopReatedBook';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('../books.json'),
      },
      {
        path: '/details/:bookId',
        element: <Details />,
        loader: () => fetch('../books.json'),
      },
      {
        path: '/listed',
        element: <Listed />,
        loader: () => fetch('../books.json'),
      },
      {
        path: '/read',
        element: <Read />,
        loader: () => fetch('../books.json'),
      },
      {
        path: '/author',
        element:  <Author />,
        loader: () => fetch('../books.json'),
      },
      {
        path: '/top-rated-book',
        element:  <TopReatedBook />,
        loader: () => fetch('../books.json'),
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
