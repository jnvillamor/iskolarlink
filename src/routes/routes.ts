import Homepage from '@/pages/Homepage/Homepage';
import ListingPage from '@/pages/ListingPage/ListingPage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import { createBrowserRouter } from 'react-router-dom';

export const routes = createBrowserRouter([
  {
    path: '',
    element: Homepage()
  },
  {
    path: '/listing',
    element: ListingPage()
  },
  {
    path: '/login',
    element: LoginPage()
  }
]);
