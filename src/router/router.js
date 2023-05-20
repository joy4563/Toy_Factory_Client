import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home/Home';
import RootLayout from '../layouts/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
]);
