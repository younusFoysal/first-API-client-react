import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from "./components/Main.jsx";
import Phones from "./components/Phones.jsx";
import Phone from "./components/Phone.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/phones",
                element: <Phones />,
                loader: () => fetch('http://localhost:5000/phones')
            },
            {
                path: "/phones/:id",
                element: <Phone />,
                loader: ({params}) => fetch(`http://localhost:5000/phones/${params.id}`)
            },

        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
    {/*<App />*/}
  </React.StrictMode>,
)
