import React from 'react'

import PropTypes from 'prop-types'

import PlaceCard from './place-card'

const Main = (props) => {
  return (
    <>
      <div id="main-section" className="main-main">
        <h1>{props.heading}</h1>
        <span className="main-text1">
          <span>
            Explore a vibrant array of online garden webshops in the United
            Kingdom, offering a wide selection of gardening supplies, tools,
            plants, and outdoor decor. Whether you&apos;re a seasoned gardener
            or a novice enthusiast, these webshops provide a convenient and
            diverse shopping experience, allowing you to transform your outdoor
            space with quality products delivered right to your doorstep.
          </span>
          <br className="main-text3"></br>
          <br></br>
          <br className="main-text5"></br>
          <br></br>
        </span>
        <div className="main-cards-container">
          <PlaceCard
            titel="London"
            image="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
          ></PlaceCard>
          <PlaceCard
            titel="Rome"
            image="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
          ></PlaceCard>
          <PlaceCard
            titel="Cluj-Napoca"
            image="https://images.unsplash.com/photo-1513342791620-b106dc487c94?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
          ></PlaceCard>
          <PlaceCard
            titel="Paris"
            image="https://images.unsplash.com/photo-1551634979-2b11f8c946fe?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
          ></PlaceCard>
          <PlaceCard
            titel="Amsterdam"
            image="https://images.unsplash.com/photo-1585211969224-3e992986159d?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
          ></PlaceCard>
          <PlaceCard
            titel="Barcelona"
            image="https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
          ></PlaceCard>
        </div>
      </div>
      <style jsx>
        {`
          .main-main {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-quadruple);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-quadruple);
            justify-content: flex-start;
          }
          .main-text1 {
            color: var(--dl-color-gray-500);
            text-align: center;
          }
          .main-text3 {
            color: var(--dl-color-gray-500);
          }
          .main-text5 {
            color: var(--dl-color-gray-500);
          }
          .main-cards-container {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-doubleunit);
            flex-wrap: wrap;
            max-width: 1000px;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          @media (max-width: 991px) {
            .main-cards-container {
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .main-main {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Main.defaultProps = {
  heading: 'Garden Webshops United Kingdom',
}

Main.propTypes = {
  heading: PropTypes.string,
}

export default Main
