import React from 'react'; //Import from React library
import { Routes, Route } from 'react-router-dom'; //Components from the react-router-dom package
import Header from './components/Header'; 
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Register from './components/pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
  }
  
  export default App;