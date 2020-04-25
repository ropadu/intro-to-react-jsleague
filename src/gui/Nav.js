import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <nav>
    <div className="nav-wrapper purple">
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Link to="/" className="brand-logo left" style={{ position: "static" }}>
          RCinema
        </Link>
        <ul id="nav-mobile" className="hide-on-med-and-down">
          <li>
            <Link to="/random">Random Movie</Link>
          </li>
          <li>
            <Link to="/list">Movies List</Link>
          </li>
          <li>
            <Link to="/new">New Movie</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
