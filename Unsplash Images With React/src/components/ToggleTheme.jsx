import React from "react";
import { useGlobalContext } from "../context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
const ToggleTheme = () => {
    const { isDarkTheme, toggleTheme } = useGlobalContext();
    return (
        <section className="toggle-container">
            <button className="dark-toggle" onClick={() => toggleTheme()}>
                {isDarkTheme ? (
                    <BsFillMoonFill className="toggle-icon" />
                ) : (
                    <BsFillSunFill className="toggle-icon" />
                )}
            </button>
        </section>
    );
};

export default ToggleTheme;
