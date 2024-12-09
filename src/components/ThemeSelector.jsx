import React from "react";
import "../styles/main.css";
import "../styles/corner.css";

function ThemeSelector() {
    return (
        <div className="flexrow-container">
            <div className="standard-theme theme-selector"></div>
            <div className="light-theme theme-selector"></div>
            <div className="darker-theme theme-selector"></div>
        </div>
    );
}

export default ThemeSelector;
