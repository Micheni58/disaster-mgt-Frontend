import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

// Hardcoded users for simulation
const MOCK_USERS = {
  citizen: {
    id: 'citizen_001',
    email: 'citizen@disaster.com',
    password: 'Citizen@123',
    fullName: 'John Doe',
    role: 'Citizen',
    phone: '+254 700 123456',
    organization: null
  },
  responder: {
    id: 'responder_001',
    email: 'responder@disaster.com',
    password: 'Responder@123',
    fullName: 'Jane Smith',
    role: 'Responder',
    phone: '+254 700 654321',
    organization: 'Fire Department'
  },
  officer: {
    id: 'officer_001',
    email: 'officer@disaster.com',
    password: 'Officer@123',
    fullName: 'Admin Officer',
    role: 'Officer',
    phone: '+254 700 987654',
    organization: 'Disaster Management Authority'
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(res => setTimeout(res, 1000));

      // Find matching user
      const foundUser = Object.values(MOCK_USERS).find(
        u => u.email === email && u.password === password
      );

      if (foundUser) {
        setUser({
          id: foundUser.id,
          email: foundUser.email,
          fullName: foundUser.fullName,
          role: foundUser.role,
          phone: foundUser.phone,
          organization: foundUser.organization
        });
        setIsAuthenticated(true);
        return { success: true, user: foundUser };
      } else {
        return { success: false, error: 'Invalid email or password' };
      }
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const signup = async (data) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(res => setTimeout(res, 1000));
      
      // For simulation, just log in as the new user
      const newUser = {
        id: `user_${Date.now()}`,
        email: data.email,
        fullName: data.fullName,
        role: data.role,
        phone: data.phone,
        organization: data.organization || null
      };

      setUser(newUser);
      setIsAuthenticated(true);
      return { success: true, user: newUser };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      loading,
      login,
      logout,
      signup
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
