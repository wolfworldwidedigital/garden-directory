import React from 'react'
import Head from 'next/head'
import PlaceCard from '../components/place-card'

import Header from '../components/Header'

const TuincentrumLeveranciers = (props) => {
  return (
    <>
      <div className="tuincentrum-leveranciers-container">
        <Head>
          <title>Tuincentrum-Leveranciers - Garden Centres</title>
          <meta
            name="description"
            content="Explore a vibrant array of online garden webshops offering a wide selection of gardening supplies, tools, plants, and outdoor decor."
          />
          <meta
            property="og:title"
            content="Tuincentrum-Leveranciers - Garden Centres"
          />
          <meta
            property="og:description"
            content="Explore a vibrant array of online garden webshops offering a wide selection of gardening supplies, tools, plants, and outdoor decor."
          />
        </Head>
        < Header />
        <div className="tuincentrum-leveranciers-hero">
          <span className="tuincentrum-leveranciers-text">
            The best garden centres on the globe
          </span>
          <h1 className="hero-text">
            Magnificent things are very simple
          </h1>
        </div>
      </div>
      <div className="cards-container">
          <PlaceCard
          title="Davrich"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_38.webp"
          link="https://davrich.co.uk"
          description="NULL"
        ></PlaceCard>
        <PlaceCard
          title="Garden Connect"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_39.webp"
          link="https://www.gardenconnect.com"
          description="Garden Connect is hét online marketing bureau voor de tuinbranche! Websites, webshops, content, marketing & meer dan 40 integraties."
        ></PlaceCard>
        <PlaceCard
          title="Nedfox"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_40.webp"
          link="https://www.nedfox.comnl/nederlands/"
          description="NULL"
        ></PlaceCard>
          </div>
      <style jsx>
        {`
         .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: var(--dl-space-space-unit);
          max-width: 1200px;
          margin: 0 auto;
        }
          .tuincentrum-leveranciers-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tuincentrum-leveranciers-hero {
            width: 100%;
            display: flex;
            padding: 48px;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('./assets/hero-4.webp');
            background-position: center;
          }
          .tuincentrum-leveranciers-text {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .hero-text {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
            max-width: 450px;
            margin-top: 32px;
            text-align: center;
            margin-bottom: 32px;
          }
          @media (max-width: 767px) {
            .tuincentrum-leveranciers-hero {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .tuincentrum-leveranciers-hero {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
          }
        `}
      </style>
    </>
  )
}

export default TuincentrumLeveranciers
