import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Login from './pages/login/Login';
import Home from './pages/home/home'
function App() {
  return (
    <Router>
   <Navbar/>
    <Routes>
    <Route path='/Login' element={<Login/>} />
      <Route path='/' element={<Home />} />
      
      
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;

