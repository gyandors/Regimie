import { createContext, useState } from 'react';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const [loggedUserEmail, setLoggedUserEmail] = useState(
    localStorage.getItem('loggedUserEmail')
  );

  const isLoggedIn = !!token;

  const ctxValue = {
    token: token,
    email: loggedUserEmail,
    isLoggedIn: isLoggedIn,
    login: handleLogin,
    logout: handleLogout,
  };

  function handleLogin(token, email) {
    setToken(token);
    localStorage.setItem('token', token);
    setLoggedUserEmail(email);
    localStorage.setItem('loggedUserEmail', email);
  }

  function handleLogout() {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('loggedUserEmail');
  }

  return (
    <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
