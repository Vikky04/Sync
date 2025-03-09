import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/shared/Navbar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './components/auth/login'
import { Signup } from './components/auth/signup.jsx'
import { Home } from './components/Home.jsx'
import Jobs from './components/Jobs.jsx'
import { Search } from './components/Search'
import { Profile } from './components/profile'
import { JobDescription } from './components/JobDescription'
import  Companies  from './components/admin/companies'
import  CompanyCreate  from './components/admin/CompanyCreate'
import  CompanySetup  from './components/admin/CompanySetup'
import  AdminJobs  from './components/admin/AdminJobs'
import PostJob from './components/admin/PostJob'
import  Applicants  from './components/admin/Applicants'
import ProtectedRoute from './components/admin/ProtectedRoute'
import { AboutUs } from './components/AboutUs'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/jobs',
    element: <Jobs />
  },
  {
    path: '/search',
    element: <Search />
  },
  {
    path: '/aboutus',
    element: <AboutUs/>
  },
  {
    path: '/description/:id',
    element: <JobDescription />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/admin/companies',
    element: <ProtectedRoute> <Companies/> </ProtectedRoute>
  },
  {
    path: '/admin/companies/create',
    element: <CompanyCreate/>
  },
  {
    path: '/admin/companies/:id',
    element:<CompanySetup/>
  },
  {
    path: '/admin/jobs',
    element:<AdminJobs/>
  },
  {
    path: '/admin/jobs/create',
    element:<PostJob/>
  },
  {
    path: '/admin/jobs/:id/applicants',
    element:<Applicants/>
  }
])

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
