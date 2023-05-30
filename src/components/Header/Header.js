import React from 'react';
import logo from '../../image/weather_logo-removebg-preview (1).png';
const Header = () => {
    return (
        <nav className=''>
            <div className="navbar fixed px-10">
                <img src={logo} className='w-12' alt="" />
                <a className="btn btn-ghost normal-case text-xl text-white">Weather App</a>
            </div>

        </nav>
    );
};

export default Header;