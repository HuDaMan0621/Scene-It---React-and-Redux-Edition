import React from 'react'

function Footer() {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        // flexshrink: "0",
        position: "fixed",
        bottom: "0",
        width: "100%",
        height: "2.5rem"
    };
    return (

        <div className="card-footer" style={mystyle}>
            This is a Footer!
        </div>
    )
}

export default Footer
