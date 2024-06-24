import { useState, useContext, createContext } from "react";
import { register, login } from "../services/user";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleRegister = async (userData) => {
    const token = await register(userData);
    const newUser = { ...userData, token };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    return token;
  };

  const handleLogin = async (userData) => {
    const token = await login(userData);
    const newUser = { email: userData.email, token };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    return token;
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, handleRegister, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
