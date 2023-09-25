import React, { useState } from "react";
import { app } from "./config";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithCustomToken,
} from "firebase/auth";
import toast from "react-hot-toast";

const Login = ({ state, setState, setLoggedIn }) => {
  const auth = getAuth(app);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handle(e) {
    e.preventDefault();
    if (password === "" || email === "") return;

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      setLoggedIn(true);
      toast.success("Logged in!!");
    })
    .catch(() => {
      setLoggedIn(false);
      toast.error("Incorrect Password");
    });
  }

  function handleGoogle(e) {
    e.preventDefault();
    signInWithPopup(auth, new GoogleAuthProvider())
    .then(() => {
      toast.success("Logged in!!");
      setLoggedIn(true);
    })
    .catch((err) => {
      setLoggedIn(false);
      alert("Server Error 500");  
    });
  }

  return (
    <>
      {state && (
        <form method="POST" className="container mt-5 border p-4 rounded">
          <h2 className="text-center my-1">Login Form</h2>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handle} type="submit" className="btn">
            Submit
          </button>
          <button onClick={handleGoogle} className="btn ml-3">
            Login Using Google
          </button>
          <button onClick={() => setState(!state)} className="btn ml-3">
            Sign Up
          </button>
        </form>
      )}
    </>
  );
};

export default Login;
