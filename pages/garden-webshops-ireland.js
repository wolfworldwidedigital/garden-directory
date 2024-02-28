import React from 'react'
import Head from 'next/head'
import PlaceCard from '../components/place-card'

import Header from '../components/Header'

const GardenWebshopsIreland = (props) => {
  return (
    <>
      <div className="garden-webshops-ireland-container">
        <Head>
          <title>Garden-Webshops-Ireland - Garden Centres</title>
          <meta
            name="description"
            content="Explore a vibrant array of online garden webshops offering a wide selection of gardening supplies, tools, plants, and outdoor decor."
          />
          <meta
            property="og:title"
            content="Garden-Webshops-Ireland - Garden Centres"
          />
          <meta
            property="og:description"
            content="Explore a vibrant array of online garden webshops offering a wide selection of gardening supplies, tools, plants, and outdoor decor."
          />
        </Head>
        < Header />
        <div className="garden-webshops-ireland-hero">
          <span className="garden-webshops-ireland-text">
            The best garden centres on the globe
          </span>
          <h1 className="hero-text">
            Magnificent things are very simple
          </h1>
        </div>
      </div>
      <div className="cards-container">
          <PlaceCard
          title="Jones Garden Centre"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_6.webp"
          link="https://www.jonesgc.com"
          description="Welcome to Jones Garden Centre near Dublin! We have a wide range of plants, garden furniture, BBQs, and many more. Our experts will be happy to help you!"
        ></PlaceCard>
        <PlaceCard
          title="Hanley's of Cork"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_7.webp"
          link="https://www.hanleysofcork.com"
          description="Outdoor heating, Barbecues, Garden furniture, and everything else that you need to make your home and garden your own. We have it all at Hanley's!"
        ></PlaceCard>
        <PlaceCard
          title="Fernhill Garden Centre"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_8.webp"
          link="https://www.fernhill.ie"
          description="Fernhill Garden Centre is the garden centre of choice for landscaping in Athlone, plants in Ireland & garden furniture. Visit now or buy online."
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
        }          .garden-webshops-ireland-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .garden-webshops-ireland-hero {
            width: 100%;
            display: flex;
            padding: 48px;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('./assets/hero-5.webp');
            background-position: center;
          }
          .garden-webshops-ireland-text {
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
            .garden-webshops-ireland-hero {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .garden-webshops-ireland-hero {
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

export default GardenWebshopsIreland
