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

      {/* <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
  <a class="navbar-brand">MTGOrganizer</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/signin">Account</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href=""></a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="">Disabled</a>
      </li>
    </ul>
  </div>
</nav> */}

      <header>

        <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
        <h1>MTGOrganizer</h1>
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarMTG"
              aria-controls="navbarMTG"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarMTG">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/signin">Account</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">About</a>
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