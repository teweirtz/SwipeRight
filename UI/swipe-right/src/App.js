import React from 'react';
// import Header from './Pages/Header';
// import Profiles from './Pages/Profiles';
// import Buttons from './Pages/Buttons';
import Main from './Pages/Main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
