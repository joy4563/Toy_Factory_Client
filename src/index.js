import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<RouterProvider router={router} />);
