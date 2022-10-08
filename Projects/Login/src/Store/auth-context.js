import React, { useState ,useEffect} from "react";

const AuthContext = React.createContext({
  // Default
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email , password) => {},
});

export const AuthContextProvider = (props) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

    //Use Effect to store Date and not Logout when reload page
    useEffect(() => {
      const storedUserInfo = localStorage.getItem("isLoggedIn");
  
      if (storedUserInfo === "1") {
        setIsLoggedIn(true);
      }
    }, []);



  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "1");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin : loginHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
