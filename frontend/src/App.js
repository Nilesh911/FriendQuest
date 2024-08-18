import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import login from './pages/login/login';
function App() {
  return (
    <Router>
   <Navbar/>
    <Routes>
      <Route
        path='/'
        pages={login}
        element={<login/>}
      />
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;

