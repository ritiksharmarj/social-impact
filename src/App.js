import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Complaint from './pages/Complaint';

const App = () => (
  <>
    <Header />

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/complaint' element={<Complaint />}></Route>
    </Routes>
  </>
);

export default App;
