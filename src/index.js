import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import AuthProvider from './contexts/AuthProvider';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
