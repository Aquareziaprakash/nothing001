import React, { useEffect, useState } from "react";
import "../styles/main.css";
import "../styles/corner.css";

function Footer() {
    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setDateTime(now.toLocaleString());
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p>
                <span id="datetime">{dateTime}</span>
            </p>
        </div>
    );
}

export default Footer;
