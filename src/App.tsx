import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import SignUp from './component/SignUp';

function App() {
  return (
    <div className="App">
      <section>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
