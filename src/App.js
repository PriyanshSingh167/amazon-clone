import { useEffect } from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { getAuth } from "firebase/auth";
import { useStateValue } from "./context/StateProvider";

function App() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();
  const auth = getAuth();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("Auth User=>>>>>>>>>>", auth.currentUser.displayName);

      if (authUser) {
        // The user just logged in or user was already logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
