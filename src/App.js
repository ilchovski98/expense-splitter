import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import HeaderController from './components/HeaderController/HeaderController';
import ResetPassword from './pages/ResetPassword';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import { parseJwt } from './helpers/jwt-decode';


function App(props) {
  const [user, setUser] = useState(false);
  useEffect(() => {
    try {
      const token = localStorage.getItem('x-auth-token');
      const parsedToken = parseJwt(token);
      setUser(parsedToken);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <BrowserRouter>
      <HeaderController user={user} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
