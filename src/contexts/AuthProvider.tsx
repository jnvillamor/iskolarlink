import { IAuth, LoginFormValues } from '@/models/authcontext';
import { User, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '@/firebase/config.js';
import React from 'react';

export const AuthContext = React.createContext<IAuth | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  const signup = (creds: LoginFormValues) => {
    return createUserWithEmailAndPassword(auth, creds.email, creds.password);
  }
  
  const login = (creds: LoginFormValues) => {
    return signInWithEmailAndPassword(auth, creds.email, creds.password);
  }

  const logout = () => {
    signOut(auth);
  }
  
  React.useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubcribe;
  });

  const contextValue = {
    user,
    loading,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
