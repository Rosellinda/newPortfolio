import React from 'react'
import '../Layouts/Nav.css'

const Nav = () => {
    const openNav = (e) => {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";  
    }

    const closeNav = (e) => {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }
    return (
        <>
            <div id="mySidebar" className="sidebar">
                <a href="/" className="closebtn" onClick={closeNav}>×</a>
                <a href="/">About</a>
                <a href="/">Services</a>
                <a href="/">Clients</a>
                <a href="/">Contact</a>
            </div>
            <div id="main">
                <button className="openbtn" onClick={openNav}>☰ Open Sidebar</button>  
                <h2>Collapsed Sidebar</h2>
            </div>
        </>
    )
}

export default Nav