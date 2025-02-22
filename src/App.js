import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import Portfolio from './mysite';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Portfolio/>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;


