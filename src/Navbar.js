import React from "react";
import "./Navbar.css";

export default function Navbar({ name }) {
  return (
    <nav className="navbar bg-body-tertiary fix">
      <div className="container-fluid">
        <h1 className=" h1 nav-text nav-band">{name}</h1>
      </div>
    </nav>
  );
}
