import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Contactus from './components/Contactus';

import { BrowserRouter, Navigate,Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Navigate to="/Login"/>}  />
      <Route path="login" element={ <Login/>}  />
      <Route path="contact us" element={ <Contactus/>}  />
      <Route path="register" element={ <Register/>}  />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
