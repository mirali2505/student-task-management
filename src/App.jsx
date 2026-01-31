import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const route=createBrowserRouter([
    {
      path:"/login",
      element:<Login />
    },
    {
      path:"/register",
      element:<Register />
    }
  ])
  
  return (
    < RouterProvider router={route} />
     
    
  )
}

export default App
