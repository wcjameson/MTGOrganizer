import React from "react";
// import { Link } from "react-router-dom";


function Header() {
  return (

    <React.Fragment>
      {/* <div className="container-fluid">
        <h1>MTGOrganizer</h1>

        <Link to="/">Home</Link>

        <Link to="/signin">Account</Link>
      </div> */}

      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <h1>MTGOrganizer</h1>
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarMTG">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" aria-current="page" href="/" >Collection</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/signin" >Account</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://gatherer.wizards.com/Pages/Default.aspx" target='blank' >Find Images</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </React.Fragment>
  )
}

export default Header;