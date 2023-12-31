import React from "react";
// import { Link} from "react-router-dom";
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="mynav">
        {/* <!-- As a heading --> */}
        <nav className="navbar mynav ">
          <div className="container ">
            <span className="navbar-brand mb-0 text-color h1">
            {" © 2023 Barbara's Lawn Care "}
              <a
                className="daGreat-link"
                href="http://www.dagreatcode.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered By
              </a>
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
}
