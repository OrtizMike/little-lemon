import React from "react";
import spinner from "../../images/spinner.gif";

const Spinner = () => {
    return (
        <>
            <img
                src={spinner}
                style={{ width: "400px", display: "block", margin: "auto" }}
                alt="Loading..."
            />
        </>
    );
}
export default Spinner;