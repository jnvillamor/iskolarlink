import '@/styles/index.css';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes.ts';
import AuthProvider from './contexts/AuthProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <RouterProvider router={routes} />
  </AuthProvider>
);
