import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Maps from './components/Maps/Maps';
import Login from './pages/login/Login.js';
import Home from './pages/home/home'
import Register from './pages/Register/Register.js';
function App() {
  return (
    <Router>
   <Navbar/>
    <Routes>
    <Route path='/Login' element={<Login/>} />
      <Route path='/' element={<Home />} />
      <Route path='/Maps' element={<Maps />} />
      <Route path='/register' element={<Register />} />
      
      
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;

