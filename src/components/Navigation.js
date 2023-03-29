import React from "react";

function Navigation() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-#ff4c68 navbar-light ">
        <a class="navbar-brand nav-heading" href="">
          <strong>W.</strong>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                New
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Popular
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Trending
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Categories
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
