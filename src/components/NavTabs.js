import React from "react";

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="background-color">
      <div className="hero ">
        <div>
          {" "}
          <h1>Caleb Luster</h1>
        </div>
        <ul className="nav nav-bar">
          <li className="nav-item">
            <a
              href="#home"
              onClick={() => handlePageChange("Home")}
              //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              //  TODO: Add a comment explaining what this logic is doing

              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#blog"
              onClick={() => handlePageChange("Blog")}
              //  TODO: Add a comment explaining what this logic is doing

              className={
                currentPage === "Blog" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              //  TODO: Add a comment explaining what this logic is doing

              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavTabs;
