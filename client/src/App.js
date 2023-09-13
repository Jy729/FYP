import React from 'react'; //Import from React library
import { Routes, Route } from 'react-router-dom'; //Components from the react-router-dom package
import Header from './components/Header'; 
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
  }
  
  export default App;