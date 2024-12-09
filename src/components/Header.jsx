import React from "react";
import "../styles/main.css";
import "../styles/corner.css";

function Header({ changeTheme }) {
    return (
        <div id="header">
            <div className="flexrow-container">
                <div
                    className="standard-theme theme-selector"
                    onClick={() => changeTheme("standard-theme")}
                ></div>
                <div
                    className="light-theme theme-selector"
                    onClick={() => changeTheme("light-theme")}
                ></div>
                <div
                    className="darker-theme theme-selector"
                    onClick={() => changeTheme("darker-theme")}
                ></div>
            </div>
            <h1 id="title">
                Just do it.
                <div id="border"></div>
            </h1>
        </div>
    );
}

export default Header;
