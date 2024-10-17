
"use client"
import { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for your context
interface AuthContextType {
  user: any; // or a more specific type, e.g., `User | null`
  login: (userData: any) => void; // Adjust the type for userData
  logout: () => void;
}

// Initialize context with `AuthContextType | null` for TypeScript safety
const AuthContext = createContext<AuthContextType | null>(null);

// Hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// AuthProvider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null); // Adjust type as needed

  const login = (userData: any) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
