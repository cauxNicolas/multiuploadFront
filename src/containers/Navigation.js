import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div id="navigation">
      <nav>
        <ul>
          <li>
            <Link to="/home">
              <p>vers la home</p>
            </Link>
          </li>
          <li>
            <Link to="/user">
              <p>vers la user</p>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <p>vers la settings</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
