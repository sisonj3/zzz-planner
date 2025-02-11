import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import Characters from './pages/characters';
import Wengines from './pages/wengines';
import Inventory from './pages/inventory';

function App() {

  // States
  const [token, setToken] = useState(undefined);
  const [id, setId] = useState(undefined);
  const [username, setUsername] = useState(undefined);
  const [account, setAccount] = useState(undefined);

  console.log("App.jsx");
  
  // Callback
  const getLoginData = (jwt, id, username, account) => {
    console.log("Getting login data...");

    setToken(jwt);
    setId(id);
    setUsername(username);
    setAccount(account);

    console.log("Done!");
  };

  const refreshAccount = () => {

    fetch(`http://localhost:3000/account/${account.userId}`, {
        mode: 'cors',
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
        },
    })
      .then(response => response.json())
      .then(response => {
        setAccount(response);
        console.log(response);
      })
      .catch(error => console.error(error));
    
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' >
          <Route index element={
            <Home
              token={token}
              id={id}
              username={username}
              account={account}
            />} />
          <Route path='signup' element={ <SignUp /> } />
          <Route path='login'
            element={<Login
              parentGetData={getLoginData}
            />}
          />
          <Route path='agents' element={<Characters token={token} account={account} callback={refreshAccount}/>} />
          <Route path='wengines' element={<Wengines token={token} account={account} callback={refreshAccount} />} />
          <Route path='inventory' element={ <Inventory token={token} account={account}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
