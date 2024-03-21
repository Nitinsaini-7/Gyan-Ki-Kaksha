import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import About from './component/About/About.jsx'
import Home from './component/Home/Home.jsx'
import Course from './component/Course/CourseHome.jsx'
import Contact from './component/Contact/Contact.jsx'
import Team from './component/Team/Team.jsx'
import Pricing from './component/Price/price.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='courses' element={<Course/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='team' element={<Team/>}/>
      <Route path='price' element={<Pricing/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   
  </React.StrictMode>,
)
