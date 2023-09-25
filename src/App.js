import React, { useState, useEffect } from "react";
import "./Navbar.css";
import CardsContainer from "./CardsContainer";
import hotels from "./data";
import { getAuth, signOut } from "firebase/auth";
import { app } from "./config";
import user from "./user.png";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import User from "./User";

function App({ setLoggedIn }) {
  const auth = getAuth(app);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(hotels);
  const [hide, setHide] = useState(true);
  const [name, setName] = useState(auth.currentUser.displayName);
  const navigate = useNavigate();

  useEffect(handle, [search]);

  function handle() {
    navigate("/");
    if (search === "") {
      setData(hotels);
      setHide(true);
    } else {
      let d = hotels.filter((item) => {
        let s = search[0].toUpperCase() + search.slice(1);
        return item.name.startsWith(s);
      });
      setData(d);
      if (d.length === 0) {
        setHide(false);
      } else {
        setHide(true);
      }
    }
  }
  return (
    <div>
      <nav className="navbar bg-body-tertiary fix">
        <div className="container-fluid">
          <div className="dropdown">
            <img
              className="dropdown-toggle user"
              style={{ width: "40px", height: "40px" }}
              src={user}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            />
            <ul className="dropdown-menu dash my-2">
              <li>
                <button className="dropdown-item" type="">
                  <Link to={`/user`}>{name}</Link>
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  <Link to={"/bookings"}>My Bookings</Link>
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    signOut(auth);
                    setLoggedIn(false);
                    navigate("/");
                  }}
                >
                  <Link>Logout</Link>
                </button>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="nav-text project nav-band mx-3">
            Hotel Boookey
          </Link>
          {/* <span> */}
          <div className="d-flex" role="search">
            <input
              className="form-control"
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Search Hotel"
              aria-label="Search"
            />
          </div>
        </div>
      </nav>

      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              {!hide && (
                <p className="text-center h2 mt-5">No Search Results!!</p>
              )}
              {hide && <CardsContainer data={data} />}
            </>
          }
        ></Route>
        <Route
          exact
          path="/user"
          element={
            <User name={name} setName={setName} setLoggedIn={setLoggedIn} />
          }
        ></Route>
        <Route
          exact
          path="/bookings"
          element={
            <>
              <h2 className="heading">My bookings</h2>
            </>
          }
        ></Route>
        <Route
          exact
          path="/*"
          element={<h2 style={{ textAlign: "center" }}>404 Not found</h2>}
        ></Route>
      </Routes>

      <div
        style={{
          color: "#cfc9cb",
          backgroundColor: "#1A1A1D",
          width: "100%",
          position: "fixed",
          bottom: "0px",
        }}
      >
        <footer style={{ textAlign: "center" }}>
          <small>This is a Patel & Punjabi group's company</small>
          <br />
          <small>
            © {new Date().getFullYear()} - {new Date().getFullYear() + 1}
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
