/* eslint-disable indent */
import { FilterOutlined, ShoppingOutlined } from '@ant-design/icons';
import * as ROUTE from 'constants/routes';
import logo from 'images/logo-full.png';
import React, { useEffect, useRef, useState, handleClick, setClick, click } from 'react';
import { useSelector } from 'react-redux';
import {
  Link, NavLink, useLocation
} from 'react-router-dom';
import styled from "styled-components";
import UserAvatar from 'views/account/components/UserAvatar';
import BasketToggle from '../basket/BasketToggle';
import Badge from './Badge';
import FiltersToggle from './FiltersToggle';
import SearchBar from './SearchBar';
import Header from './header768/Header'
const Navigation = () => {
  const navbar = useRef(null);
  const { pathname } = useLocation();

  const store = useSelector((state) => ({
    basketLength: state.basket.length,
    user: state.auth,
    isAuthenticating: state.app.isAuthenticating,
    isLoading: state.app.loading
  }));
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const onClickLink = (e) => {
    if (store.isAuthenticating) e.preventDefault();
  };

  // disable the basket toggle to these pathnames
  const basketDisabledpathnames = [
    ROUTE.CHECKOUT_STEP_1,
    ROUTE.CHECKOUT_STEP_2,
    ROUTE.CHECKOUT_STEP_3,
    ROUTE.SIGNIN,
    ROUTE.SIGNUP,
    ROUTE.FORGOT_PASSWORD
  ];

  if (store.user && store.user.role === 'ADMIN') {
    return null;
  } 
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    width < 768 && handleSideNavToggle();
  }, [width]);
  function handleSideNavToggle() {
    console.log("toggle it");
  }
  return (
    width > 768 ? (
    <nav className="navigation" ref={navbar}>
        <Link onClick={onClickLink} to="/"><Logo alt="Logo" src={"https://res.cloudinary.com/marcos020499/image/upload/v1628720611/MANGO_GLAMOUR_sdfave.png"} /></Link>
      <ul className="navigation-menu-main">
        <li><NavLink activeClassName="navigation-menu-active" exact to={ROUTE.HOME}>Inicio</NavLink></li>
        <li><NavLink activeClassName="navigation-menu-active" to={ROUTE.SHOP}>Tienda</NavLink></li>
        <li><NavLink activeClassName="navigation-menu-active" to={ROUTE.FEATURED_PRODUCTS}>Destacado</NavLink></li>
        <li><NavLink activeClassName="navigation-menu-active" to={ROUTE.RECOMMENDED_PRODUCTS}>Recomendado</NavLink></li>
        <li><NavLink activeClassName="navigation-menu-active" to={ROUTE.CONTACT}>Contacto</NavLink></li>
      </ul>
      {(pathname === ROUTE.SHOP || pathname === ROUTE.SEARCH) && (
        <FiltersToggle>
          <button className="button-muted button-small" type="button">
            Filters &nbsp;
            <FilterOutlined />
          </button>
        </FiltersToggle>
      )}
      <SearchBar handleClick={handleClick} setClick={setClick} click={click}/>
      <ul className="navigation-menu">
        <li className="navigation-menu-item">
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
        </li>
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
      </ul>
    </nav>
    ):(
      <Header store={store} onClickLink={onClickLink} basketDisabledpathnames={basketDisabledpathnames} pathname={pathname} Badge={Badge} ShoppingOutlined={ShoppingOutlined}/>
    )
  );
};
const Logo = styled.img`
  width: 7vw;
  border-radius: 10px;
  margin: 0 0 0 -2vw;
  @media screen and (max-width: 768px) {
  }
`;
export default Navigation;
