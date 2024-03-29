import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Header from './components/Header';


const App = () => {
  return (
   <Router>
      <Header />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/sign-in' element={<SignIn />} />
       <Route path='/sign-up' element={<SignUp />} />
       <Route path='/about' element={<About />} />       
       <Route path='/profile' element={<Profile />} />
     </Routes>
   </Router>
  )
}

export default App