import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <div className="app-component-container">
        <Link href="/garden-webshops-ireland">
          <a className="app-component-link">{props.text}</a>
        </Link>
      </div>
      <style jsx>
        {`
          .app-component-container {
            display: flex;
            position: relative;
          }
          .app-component-link {
            font-size: 12px;
            text-align: center;
            font-weight: 700;
            margin-left: 32px;
            text-decoration: underline;
          }
          @media (max-width: 767px) {
            .app-component-link {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  text: 'Garden Webshops Ireland:',
}

AppComponent.propTypes = {
  text: PropTypes.string,
}

export default AppComponent
