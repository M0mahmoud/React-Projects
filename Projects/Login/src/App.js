import React ,{useContext} from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./Store/auth-context";

function App() {
  //Commit All Because We Move To auth-context File

//  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // //Use Effect to store Date and not Logout when reload page
  // useEffect(() => {
  //   const storedUserInfo = localStorage.getItem("isLoggedIn");

  //   if (storedUserInfo === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);
  // const loginHandler = (email, password) => {
  //   //localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   //localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  const ctx= useContext (AuthContext)
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login  />}
        {ctx.isLoggedIn && <Home  />}
      </main>
      </React.Fragment>
  );
}

export default App;
