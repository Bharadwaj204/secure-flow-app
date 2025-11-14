
import React, { createContext, useState, ReactNode } from 'react';

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  isConfigured: boolean;
  login: (email: string) => void;
  logout: () => void;
  saveConfig: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isConfigured, setIsConfigured] = useState<boolean>(false);

  const login = (email: string) => {
    setUser({ email });
  };

  const logout = () => {
    setUser(null);
    setIsConfigured(false);
  };

  const saveConfig = () => {
    if (user) {
      setIsConfigured(true);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isConfigured, login, logout, saveConfig }}>
      {children}
    </AuthContext.Provider>
  );
};
