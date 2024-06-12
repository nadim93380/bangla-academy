import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/Home';
import ListedBooks from './Pages/ListedBooks';
import PagesToRead from './Pages/PagesToRead';
import BookDetails from './Components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [{
      path: '/',
      element: <Home></Home>,
      loader: ()=> fetch('fakeData.json')
    },
      {
        path: '/listedbooks',
        element:<ListedBooks></ListedBooks>
      },
      {
        path: '/pagestoread',
        element:<PagesToRead></PagesToRead>
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch('fakeData.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
