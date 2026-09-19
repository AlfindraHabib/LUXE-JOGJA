import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);