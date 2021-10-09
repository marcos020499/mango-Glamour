import React, { useState, useSelector } from "react";
import "./header.css";
import * as ROUTE from '../../../constants/routes';
import {
  Link, NavLink, useLocation
} from 'react-router-dom';
import SearchBar from '../SearchBar';
import UserAvatar from '../../../views/account/components/UserAvatar';
import BasketToggle from '../../basket/BasketToggle';

const Header = ({store, basketDisabledpathnames, ShoppingOutlined, pathname, Badge}) => {
  const [click, setClick] = useState(false);
  const handleClick = (e) => setClick(!click)
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="#">
            <img src={'https://res.cloudinary.com/marcos020499/image/upload/v1628720611/MANGO_GLAMOUR_sdfave.png'} className="logo" />
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
        <li><NavLink className="option" exact to={ROUTE.HOME}>Inicio</NavLink></li>
        <li><NavLink className="option" to={ROUTE.SHOP}>Tienda</NavLink></li>
        <li><NavLink className="option" to={ROUTE.FEATURED_PRODUCTS}>Destacado</NavLink></li>
        <li><NavLink className="option" to={ROUTE.RECOMMENDED_PRODUCTS}>Recomendado</NavLink></li>
        <li><NavLink className="option" to={ROUTE.CONTACT}>Contacto</NavLink></li>
        <SearchBar />
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
      <BasketToggle>
            {({ onClickToggle }) => (
              <button
                className="button-link navigation-menu-link basket-toggle"
                disabled={basketDisabledpathnames.includes(pathname)}
                onClick={onClickToggle}
                type="button"
              >

                <Badge count={store.basketLength}>
                  <ShoppingOutlined style={{ fontSize: '2.4rem' }} />
                </Badge>
              </button>
            )}
          </BasketToggle>
      {store.user ? (
          <li className="navigation-menu-item">
            <UserAvatar />
          </li>
        ) : (
          <li className="navigation-action">
            {pathname !== ROUTE.SIGNUP && (
              <Link
                className="button button-small"
                onClick={onClickLink}
                to={ROUTE.SIGNUP}
              >
               Registrarse
              </Link>
            )}
            {pathname !== ROUTE.SIGNIN && (
              <Link
                className="button button-small button-muted margin-left-s"
                onClick={onClickLink}
                to={ROUTE.SIGNIN}
              >
                Iniciar sesión
              </Link>
            )}
          </li>
        )}
        {click  ? (
          <img src={"https://res.cloudinary.com/marcos020499/image/upload/v1633807803/times-circle-solid_fywisk.svg"} className="menu-icon" />
        ) : (
          <img src="https://res.cloudinary.com/marcos020499/image/upload/v1633807803/bars-solid_deiuyv.svg" className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
