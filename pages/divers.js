import React from 'react'
import Head from 'next/head'
import PlaceCard from '../components/place-card'


const Divers = (props) => {
  return (
    <>
      <div className="divers-container">
        <Head>
          <title>Divers - Garden Centres</title>
          <meta
            name="description"
            content="Explore a vibrant array of online garden webshops offering a wide selection of gardening supplies, tools, plants, and outdoor decor."
          />
          <meta property="og:title" content="Divers - Garden Centres" />
          <meta
            property="og:description"
            content="Explore a vibrant array of online garden webshops offering a wide selection of gardening supplies, tools, plants, and outdoor decor."
          />
        </Head>
        <div className="divers-hero">
          <span className="divers-text">
            The best garden centres on the globe
          </span>
          <h1 className="hero-text">Magnificent things are very simple</h1>
        </div>
      </div>
      <div className="cards-container">
      <PlaceCard
          title="Diëtist Mandy Breure"
          category="Divers"
          website="https://www.dietistmandybreure.nl"
          description="Diëtist Mandy Breure helpt cliënten met diabetes type 2, darmklachten en overgewicht. Ik help je gezond afvallen zonder dieet."
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_138.webp"
        ></PlaceCard>
        <PlaceCard
          title="Nationale Tuinbon"
          category="Divers"
          website="https://www.nationale-tuinbon.nl"
          description="De Nationale Tuinbon is de groenste cadeaukaart, te besteden bij een groot aantal tuincentra in Nederland. Bekijk hier de deelnemende tuincentra en bestel de tuinbon online."
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_139.webp"
        ></PlaceCard>
        <PlaceCard
          title="Kunstkerstboompunt.nl"
          category="Divers"
          website="https://www.kunstkerstboompunt.nl"
          description="Op zoek naar een Kunstkerstboom? Bij Kunstkerstboompunt.nl vind je diverse kunstkerstbomen in verschillende soorten en maten."
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_140.webp"
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
          .divers-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .divers-header {
            width: 100%;
            display: flex;
            max-width: 1400px;
            box-shadow: 5px 5px 10px 0px #000000;
            padding-top: 32px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: 48px;
            padding-right: 48px;
            flex-direction: row;
            padding-bottom: 32px;
            justify-content: space-between;
            background-color: rgba(217, 217, 217, 0);
          }
          .divers-nav {
            width: 877px;
            height: 29px;
            display: flex;
          }
          .divers-btn-group {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .divers-burger-menu {
            display: none;
          }
          .divers-icon {
            width: 16px;
            height: 16px;
          }
          .divers-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .divers-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .divers-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 48px;
            justify-content: space-between;
          }
          .divers-image {
            height: 2rem;
          }
          .divers-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .divers-icon02 {
            width: 16px;
            height: 16px;
          }
          .divers-icon04 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .divers-icon06 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .divers-icon08 {
            width: 16px;
            height: 16px;
          }
          .divers-hero {
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
          .divers-text {
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
            .divers-header {
              padding-left: 32px;
              padding-right: 32px;
            }
            .divers-nav {
              display: none;
            }
            .divers-btn-group {
              display: none;
            }
            .divers-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .divers-hero {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .divers-header {
              padding: var(--dl-space-space-unit);
            }
            .divers-mobile-menu {
              padding: 16px;
            }
            .divers-hero {
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

export default Divers
