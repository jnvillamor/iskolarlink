import { IAuth } from '@/models/authcontext';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/config.js';
import React from 'react';

export const AuthContext = React.createContext<IAuth | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubcribe;
  });

  const contextValue = {
    user,
    loading
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
