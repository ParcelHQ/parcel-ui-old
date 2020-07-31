import React from 'react';
import { Navbar } from 'reactstrap';
import classnames from 'classnames';
import NavbarUser from './NavbarUser';
import { NavItem, NavLink } from 'reactstrap';
import * as Icon from 'react-feather';
import userImg from '../../assets/img/portrait/small/avatar-s-11.jpg';

export default function ThemeNavbar({
  changeCurrentLang,
  handleAppOverlay,
  sidebarVisibility,
  horizontal,
  scrolling,
}: any) {
  const navbarType = 'floating';
  const navbarColor = 'default';
  const colorsArr = ['primary', 'danger', 'success', 'info', 'warning', 'dark'];
  const navbarTypes = ['floating', 'static', 'sticky', 'hidden'];
  return (
    <>
      <div className="content-overlay" />
      <div className="header-navbar-shadow" />
      <Navbar
        className={classnames(
          'header-navbar navbar-expand-lg navbar navbar-with-menu navbar-shadow',
          {
            'navbar-light': !colorsArr.includes(navbarColor),
            'navbar-dark': colorsArr.includes(navbarColor),

            'floating-nav':
              (navbarType === 'floating' && !horizontal) ||
              (!navbarTypes.includes(navbarType) && !horizontal),

            'fixed-top': horizontal,
            scrolling: horizontal && scrolling,
          }
        )}
      >
        <div className="navbar-wrapper">
          <div className="navbar-container content">
            <div
              className="navbar-collapse d-flex justify-content-between align-items-center"
              id="navbar-mobile"
            >
              <div className="bookmark-wrapper">
                <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                  <ul className="navbar-nav d-xl-none">
                    <NavItem className="mobile-menu mr-auto">
                      <NavLink
                        className="nav-menu-main menu-toggle hidden-xs is-active"
                        onClick={sidebarVisibility}
                      >
                        <Icon.Menu className="ficon" />
                      </NavLink>
                    </NavItem>
                  </ul>
                </div>
              </div>

              <NavbarUser
                handleAppOverlay={handleAppOverlay}
                changeCurrentLang={changeCurrentLang}
                userName="Brennan Fife"
                userImg={userImg}
              />
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}
