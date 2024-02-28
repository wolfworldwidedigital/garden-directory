import React from 'react';
import PropTypes from 'prop-types';
import Nav2 from './nav2';
import Nav1 from './nav1';

const Header = (props) => {
  return (
    <>
      <header className={`header-header ${props.rootClassName}`}>
        <div className="header-container">
          <Nav2 />
          <div className="header-nav">
            <Nav1 />
          </div>
        </div>
        <div className="header-btn-group"></div>
        <div data-role="BurgerMenu" className="header-burger-menu">
          {/* Your Burger Menu SVG */}
        </div>
        <div data-role="MobileMenu" className="header-mobile-menu">
          <div className="header-nav1">
            <div className="header-container1">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="header-image"
              />
              <div data-role="CloseMobileMenu" className="header-menu-close">
                {/* Your Close Mobile Menu SVG */}
              </div>
            </div>
          </div>
          <div>
            {/* Your SVG Icons */}
          </div>
        </div>
      </header>
      <style jsx>
        {`
          .header-header {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1400px;
            align-items: center;
            padding: 32px 48px;
            justify-content: space-between;
          }
          .header-container {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .header-nav {
            display: flex;
          }
          .header-btn-group {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .header-burger-menu {
            display: none;
          }
          .header-image {
            height: 2rem;
          }
          .header-mobile-menu {
            // Your Mobile Menu Styles
          }
          .header-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 48px;
            justify-content: space-between;
          }

          // Add your other styles here...

          @media (max-width: 767px) {
            .header-header {
              padding: 32px;
            }
            .header-nav {
              display: none;
            }
            .header-btn-group {
              display: none;
            }
            .header-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }

          @media (max-width: 479px) {
            .header-header {
              padding: var(--dl-space-space-unit);
            }
            .header-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  );
};

Header.defaultProps = {
  rootClassName: '',
};

Header.propTypes = {
  rootClassName: PropTypes.string,
};

export default Header;
