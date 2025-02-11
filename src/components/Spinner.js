import React from "react";
import "./Spinner.css";

const Spinner = () => {
    return (
        <div clasName="flexx flex-col justify-center items-center space-y-2">
            <div className="spinner"></div>
            <p className = "text-bgDark text-lg font-semibold">Loading...</p>
        </div>
    );
}

export default Spinner;