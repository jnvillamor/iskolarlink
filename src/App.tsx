import { Outlet } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';

function App() {
  <AuthProvider>
    <Outlet />;
  </AuthProvider>;
}

export default App;
