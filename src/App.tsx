import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { RegisterPage } from './pages/RegisterPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
