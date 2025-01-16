import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import './App.css';

function App() {

  // States
  const [token, setToken] = useState(undefined);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' >
          <Route index element={ token == undefined ? <Navigate to="/login"/> : <Home />} />
          <Route path='signup' element={ <SignUp /> } />
          <Route path='login' element={ <Login /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
