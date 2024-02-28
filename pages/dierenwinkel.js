import React from 'react'
import Head from 'next/head'
import PlaceCard from '../components/place-card'
import Header from '../components/Header'

const Dierenwinkel = (props) => {
  return (
    <>
      <div className="dierenwinkel-container">
        <Head>
          <title>Dierenwinkel - Garden Centres</title>
          <meta
            name="description"
            content="Explore a vibrant array of online garden webshops offering a wide selection of gardening supplies, tools, plants, and outdoor decor."
          />
          <meta property="og:title" content="Dierenwinkel - Garden Centres" />
          <meta
            property="og:description"
            content="Explore a vibrant array of online garden webshops offering a wide selection of gardening supplies, tools, plants, and outdoor decor."
          />
        </Head>
        < Header />

        <div className="dierenwinkel-hero">
          <span className="dierenwinkel-text">
            The best garden centres on the globe
          </span>
          <h1 className="hero-text">
            Magnificent things are very simple
          </h1>
        </div>
      </div>
      <div className="cards-container">
        <PlaceCard
          title="Dierenarts Boschhoven"
          category="Dierenwinkels"
          website="https://www.dierenartsboschhoven.nl"
          description=""
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_135.webp"
        ></PlaceCard>
        <PlaceCard
          title="Dierenkliniek Coppelmans"
          category="Dierenwinkels"
          website="https://www.dierenkliniekcoppelmans.nl"
          description="Dierenkliniek Coppelmans is uw dierenarts in de buurt van Eindhoven, Helmond en Geldrop. Onze specialisten zorgen voor de beste zorg voor uw huisdier!"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_136.webp"
        ></PlaceCard>
        <PlaceCard
          title="Petfooddiscount"
          category="Dierenwinkels"
          website="https://www.petfooddiscount.nl"
          description="Welkom bij Petfooddiscount. U kunt bij ons terecht voor scherpe prijzen en deskundig advies omtrent huisdieren, voeding, speelgoed en verzorgingsproducten."
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_137.webp"
        ></PlaceCard>
        <div className="dierenwinkel-footer"></div>
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
          .dierenwinkel-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .dierenwinkel-hero {
            width: 100%;
            display: flex;
            padding: 48px;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('./assets/hero-11.webp');
            background-position: center;
          }
          .dierenwinkel-text {
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
            .dierenwinkel-hero {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .dierenwinkel-hero {
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

export default Dierenwinkel
