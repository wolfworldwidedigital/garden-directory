import React from 'react';
import PropTypes from 'prop-types';

const PlaceCard = (props) => {
  return (
    <>
      <div className="place-card-container">
        <a href={props.link} rel="noopener noreferrer dofollow">
          <img
            alt={props.imageAlt}
            src={props.image}
            className="place-card-image"
          />
        </a>
        <div className="place-card-container1">
          <a href={props.link} rel="nofollow">
            <span className="place-card-text">{props.title}</span>
          </a>
          <span className="place-card-text1">{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
      
          .place-card-container {
            display: flex;
            flex-direction: row;
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
            // Add more styling as needed
          }
          .place-card-image {
            width: 100%;
            height: auto;
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .place-card-container1 {
            display: flex;
            flex-direction: column;
            padding: var(--dl-space-space-unit);
            // Add more styling as needed
          }
          .place-card-text {
            font-size: 22px;
            font-style: normal;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .place-card-text1 {
            font-size: 12px;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          @media (min-width: 768px) {
            .place-card-container {
              flex-direction: column;
            }
          }
          @media (min-width: 1200px) {
            .place-card-container {
              flex-direction: column;
              flex-wrap: wrap;
              justify-content: space-between;
              // Add more styling as needed
            }
            .place-card-container1 {
              margin-left: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  );
};

PlaceCard.defaultProps = {
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000',
  imageAlt: 'image',
  title: 'Title Name',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
};

PlaceCard.propTypes = {
  ID: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string, // Add link prop
};

export default PlaceCard;
