import React from 'react'
import Main from './Pages/Main'
import Register from './Pages/Register'
import Profile from './Pages/Profile'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useCookies} from 'react-cookie'

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const authToken = cookies.AuthToken
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        {authToken && <Route path="/register" element={<Register/>}/>}
        {authToken && <Route path="/profile" element={<Profile/>}/>}
      </Routes>
    </BrowserRouter>
  )
}

export default App
