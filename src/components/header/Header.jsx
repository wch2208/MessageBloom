import React from "react";
import { Link } from "react-router-dom";
import "../../styles/header/Header.scss";
import logoicon from "../../assets/logo/ic_logo.svg";


const Header = () => {
    return (
        <header className="header">
            <div className="header__left">
                <Link to="/" aria-label="홈으로 이동">
                    <picture className="header__logo">
                        <img className="header__logo-icon" src={logoicon} alt="로고" />
                        <span className="header__logo-text">Rolling</span>
                    </picture>
                </Link>
            </div>
    
            <button to="/post" className="header__post-btn">롤링 페이지 만들기</button>
        </header>
    );
}

export default Header;


