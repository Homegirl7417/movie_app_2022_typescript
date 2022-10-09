import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home'
import About from './routes/About'

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Home/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
