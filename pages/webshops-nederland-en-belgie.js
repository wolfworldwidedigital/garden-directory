import React from 'react'
import Head from 'next/head'
import PlaceCard from '../components/place-card'

import Header from '../components/header'

const WebshopsNederlandEnBelgie = (props) => {
  return (
    <>
      <div className="webshops-nederland-en-belgie-container">
        <Head>
          <title>Webshops-Nederland-en-Belgie - Garden Centres</title>
          <meta
            name="description"
            content="Explore a vibrant array of online garden webshops offering a wide selection of gardening supplies, tools, plants, and outdoor decor."
          />
          <meta
            property="og:title"
            content="Webshops-Nederland-en-Belgie - Garden Centres"
          />
          <meta
            property="og:description"
            content="Explore a vibrant array of online garden webshops offering a wide selection of gardening supplies, tools, plants, and outdoor decor."
          />
        </Head>
        <div className="webshops-nederland-en-belgie-hero">
          <span className="webshops-nederland-en-belgie-text">
            The best garden centres on the globe
          </span>
          <h1 className="hero-text">
            Magnificent things are very simple
          </h1>
        </div>
      </div>
      <div className="cards-container">
          <PlaceCard
          title="bbqkopen.nl"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_80.webp"
          link="https://www.bbqkopen.nl"
          description="Barbecues kopen tegen absolute bodemprijzen? Kies uit topmerken als Weber, The Bastard en Boretti. Bestel online of bezoek de showroom in Tilburg."
        ></PlaceCard>
        <PlaceCard
          title="detuinwinkelonline.nl"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_81.webp"
          link="https://www.detuinwinkelonline.nl"
          description="Bestel bij De Tuinwinkel Online, onderdeel van GroenRijk 't Haantje ✓ Trends van 2023 ✓ Ruim assortiment ✓ Gratis verzenden (NL) vanaf €50,-"
        ></PlaceCard>
        <PlaceCard
          title="tuincenter-vincent.be"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_82.webp"
          link="https://www.tuincenter-vincent.be"
          description="Tuincenter Vincent in Dendermonde, nabij Aalst is het tuincentrum voor jouw huis, tuin & vijver. Bezoek onze webshop of kom langs."
        ></PlaceCard>
        <PlaceCard
          title="tuincentrumoutlet.com"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_83.webp"
          link="https://www.tuincentrumoutlet.com"
          description="Shop 24/7 alles voor buiten én binnen online! Van bloempot tot regenton en van stoelen tot interieurparfum, in onze outlet vind je het allemaal. Gratis bezorgd!"
        ></PlaceCard>
        <PlaceCard
          title="tuincollectie.nl"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_84.webp"
          link="https://www.tuincollectie.nl"
          description="Bezoek Tuincollectie voor een overweldigend aanbod sfeervolle woonaccessoires, prachtige planten, comfortabele tuinmeubelen en alles rondom buitenleven."
        ></PlaceCard>
        <PlaceCard
          title="tuinmeubels.nl"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_85.webp"
          link="https://www.tuinmeubels.nl"
          description="Tuinmeubels van goede kwaliteit? Bezoek de website voor een uitgebreid assortiment tuinsets, stoelen, banken, tafels, loungesets, haarden en meer."
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
          .webshops-nederland-en-belgie-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .webshops-nederland-en-belgie-hero {
            width: 100%;
            display: flex;
            padding: 48px;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('./assets/hero-1.webp');
            background-position: center;
          }
          .webshops-nederland-en-belgie-text {
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
            .webshops-nederland-en-belgie-hero {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .webshops-nederland-en-belgie-hero {
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

export default WebshopsNederlandEnBelgie
