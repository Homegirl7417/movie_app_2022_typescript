import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home'
import About from './routes/About'
import Detail from './routes/Detail'
import Navigation from './components/Navigation';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/about'} element={<About/>} />
        <Route path={`/movie/:id`} element={<Detail/>} />
        <Route path={'*'} element={<Home/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
