import { useState, useEffect } from "react";
import App from "./App";
import Login from "./Login";
import Navbar from "./Navbar";
import SignUp from "./Signup";
import { Toaster } from "react-hot-toast";
import { getAuth } from "firebase/auth";
import { app } from "./config";
import { BrowserRouter as Router } from "react-router-dom";

export default function Main() {
  const auth = getAuth(app);
  const [state, setState] = useState(true);
  const [loggedIn, setLoggedIn] = useState(auth.currentUser != null);

  return (
    <Router>
      {loggedIn && <App setLoggedIn={setLoggedIn} />}
      <Toaster position="top-right" reverseOrder={false} />

      {!loggedIn && (
        <>
          <Navbar name={"Hotel Boookey"} />
          <SignUp setLoggedIn={setLoggedIn} state={state} setState={setState} />
          <Login setLoggedIn={setLoggedIn} state={state} setState={setState} />
        </>
      )}
    </Router>
  );
}
