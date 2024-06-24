import { useState, useContext, createContext } from "react";
import { register, login } from "../services/user";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleRegister = async (userData) => {
    const token = await register(userData);
    setUser({ ...userData, token });
  };

  const handleLogin = async (userData) => {
    const token = await login(userData);
    setUser({ email: userData.email, token });
  };

  return (
    <UserContext.Provider value={{ user, handleRegister, handleLogin }}>
      {children}
    </UserContext.Provider>
  );
};
