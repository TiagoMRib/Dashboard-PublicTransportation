import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './Main';
import InfoPage from './components/InfoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/lines" element={<InfoPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
