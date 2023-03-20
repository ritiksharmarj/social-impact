import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SupaProvider } from './SupaContext';

import App from './App';
import './index.css';

const rootEl = document.getElementById('root');
ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <BrowserRouter>
    <SupaProvider>
        <App />
      </SupaProvider>
    </BrowserRouter>
  </React.StrictMode>
);
