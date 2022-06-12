import React from 'react';
import './header.css';
import { CartBlock } from '../cart-block';
import {Link} from "react-router-dom";
import { FindString } from "../find-string";
import {useLocation} from 'react-router-dom'

export const Header = () => {
    const {pathname} = useLocation()


    return (
        <div className="header">
            <div className="wrapper">
                <Link to="/" className="header__store-title">
                    Play Store
                </Link>
            </div>
           {pathname === '/' &&  <FindString/>}
            <div className="wrapper header__cart-btn-wrapper">
                <CartBlock />
            </div>
        </div>
    );
};