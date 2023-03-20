import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';

const App = () => (
  <>
    <Header />

    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
  </>
);

export default App;
