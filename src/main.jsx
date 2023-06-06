import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home.jsx';
import Card from './Components/Card/Card.jsx';
import DetailsPage from './Components/DetailsPage/DetailsPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('https://api.tvmaze.com/search/shows?q=all')
      },
      {
        path: "/moveDetails/:id",
        element: <DetailsPage/>,
        loader: ({params}) => fetch(`https://api.tvmaze.com/search/shows?q=all/${params.id}`)
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
  </React.StrictMode>,
)
