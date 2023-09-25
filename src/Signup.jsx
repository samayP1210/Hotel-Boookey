import React, { useState } from "react";
import { app } from "./config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  updatePassword,
} from "firebase/auth";
import toast from "react-hot-toast";

const SignUp = ({ state, setState, setLoggedIn }) => {
  const auth = getAuth(app);
  const google = new GoogleAuthProvider();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  function handleGoogle(e) {
    e.preventDefault();
    signInWithPopup(auth, google)
      .then(() => {
        toast.success("Signed up successfully!!");
        setLoggedIn(true);
      })
      .catch((err) => {
        setLoggedIn(false);
        alert("Server Error 500");
      });
  }

  const handle = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("Password should be greater than 6 letters");
      return;
    }
    try {
      let data = await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Signed up successfully!!");
      setLoggedIn(true);
      updateProfile(auth.currentUser, { displayName: name })
        .then()
        .catch((err) => console.log(err));
    } catch (err) {
      setLoggedIn(false);
      alert("Server Error 500");
    }
  };
  return (
    <>
      {!state && (
        <form className="container mt-5 border p-4 rounded">
          <h2 className="text-center my-1">SignUp Form</h2>
          <div className="form-group">
            <label htmlFor="userName">Name</label>
            <input
              type="text"
              required={true}
              className="form-control"
              id="userName"
              aria-describedby="nameHelp"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              required={true}
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
              required={true}
              placeholder="Password"
              value={password}
              minLength={6}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handle} className="btn">
            Submit
          </button>
          <button onClick={handleGoogle} className="btn ml-3">
            SignUp Using Google
          </button>
          <button onClick={() => setState(!state)} className="btn ml-3">
            Login
          </button>
        </form>
      )}
    </>
  );
};

export default SignUp;
