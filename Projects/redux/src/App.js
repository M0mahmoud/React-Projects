import UserProfile from "./Components/UserProfile";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Auth from "./Components/Auth";

import { useSelector } from "react-redux";

import "./App.css";

function App() {
  const auth = useSelector((state) => state.auth.auth);

  return (
    <>
      <Header />
      {!auth && <Auth />}
      {auth && <UserProfile />}
      {auth && <Counter />}
    </>
  );
}

export default App;
