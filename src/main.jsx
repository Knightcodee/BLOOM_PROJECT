//main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={window.location.pathname || '' }> <>
      <ChakraProvider>
        <App />
      </ChakraProvider>
      </> </BrowserRouter>
  </React.StrictMode>
);
