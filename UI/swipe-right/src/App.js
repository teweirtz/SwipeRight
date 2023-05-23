import React from 'react';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard.js';
import OnBoarding from './Pages/Onboarding.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {useCookies} from 'react-cookie';
import './index.css';


const App = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const authToken = cookies.AuthToken

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {authToken && <Route path="/dashboard" element={<Dashboard/>}/>}
                {authToken && <Route path="/onboarding" element={<OnBoarding/>}/>}

            </Routes>
        </BrowserRouter>
    )
}

export default App;
