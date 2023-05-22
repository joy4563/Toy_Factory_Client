import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
]);
