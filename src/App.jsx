import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import Home from './Components/Home/home.jsx'
import Layeout from './Components/Layeout/Layeout.jsx'
import { createBrowserRouter, Route } from 'react-router-dom'
import About from './Components/About/about.jsx'
import Notfound from './Components/Notfound/Notfound.jsx'
import Services from './Components/Services/Services.jsx'
import Contact from './Components/Contact/Contact.jsx'
import OurWork from './Components/OurWork/OurWork.jsx'

let x = createBrowserRouter([
  {
    path:"",
    element:<Layeout/> , children:[
      {
        path:"/",
        element:<Home/>},
        {
          path:"about",
          element:<About/>
        },
        {
          path:"*",
          element:<Notfound/>
        },
        {
          path:"services",
          element:<Services/>
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          path:"ourwork",
          element:<OurWork/>
        }


    ]
  }
])

function App() {
 

  return (
  <> 
 
   <RouterProvider router={x} ></RouterProvider>
   </>
  )
}

export default App
