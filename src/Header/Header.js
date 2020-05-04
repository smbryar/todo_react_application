import React from 'react';
// import ButtonItem, { SettingsIcon } from '../ButtonItem/ButtonItem';
import './Header.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
            aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div class="collapse navbar-collapse" id="navbarCollapse" style>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Link 1</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link 2</a>
                </li>
            </ul>
        </div> */}
        <h1 className="navbar-brand title">My Tasks</h1>
        {/* <ButtonItem>
            <SettingsIcon squareHeight="1.5em"/>
        </ButtonItem>   */}
    </nav>
  );
}

export default Header;
