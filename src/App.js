// import default styling 
import './App.css';
// import  onother functionality 
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import components 🍔 
import Header from './components/Navigating/Header';
import Footer from './components/footer/Footer';
import Home from './components/Home';
import Videos from './components/Videos';
import Upload from './components/Upload';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
   <div>
   <Router>
    <Header />
    <Routes>
    <Route path='/' element={<Home />}  />
    <Route path='/videos' element={<Videos />}  />
    <Route path='/upload' element={<Upload />}  />
    <Route path='/login' element={<Login />}  />
    <Route path='/signup' element={<Signup />}  />
    </Routes>
    <Footer />
   </Router>

   </div>
  );
}

export default App;
