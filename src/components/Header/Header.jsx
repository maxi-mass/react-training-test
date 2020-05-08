import React from 'react';
import h from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={h.header}>
            <img
                alt='header'
                src="https://bcassetcdn.com/asset/logo/e33c12b4-1128-4129-b31f-2c31cb0878c7/logo?v=4&text=Logo+Text+Here"
            />
            <div className={h.loginBlock}>
                {props.isAuth 
                    ?<div>{props.login} <button onClick={() => {props.logout()}}>Logout</button></div> 
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;