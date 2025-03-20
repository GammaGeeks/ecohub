import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'react-toastify/dist/ReactToastify.css';

// Import Bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import your custom styles
import './assets/css/main.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
