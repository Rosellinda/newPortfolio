import React from 'react';
import Logo from '../img/newLogo.gif';
import './index.css';

const Home = () => {
    return (
        <div>
            <div className="mb_parallax_container home" id="mb_parallax_one">
                <div className="mb_parallax_overlay">
                    <h1>Parallax Background with overlay</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;