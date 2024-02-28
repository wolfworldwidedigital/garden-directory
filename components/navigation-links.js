import React from 'react'

import PropTypes from 'prop-types'

import Header from './header'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <div className="navigation-links-container">
          <Header></Header>
        </div>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            width: 1106px;
            height: 156px;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }

          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  text1: 'Garden Webshops Ireland',
  text: 'Garden Webshops United Kingdom',
  text3: 'Garden Centres United Kingdom',
  text4: 'Tuincentrum Leveranciers:',
  text2: 'Garden Centres Canada',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks
