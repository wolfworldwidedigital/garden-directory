import React from 'react'
import Head from 'next/head'
import PlaceCard from '../components/place-card'
import Header from '../components/Header'
const GardenWebshopsUnitedKingdom = (props) => {
  return (
    <>
      <div className="garden-webshops-united-kingdom-container">
        <Head>
          <title>Garden-Webshops-United-Kingdom - Garden Centres</title>
          <meta
            name="description"
            content="Explore a vibrant array of online garden webshops offering a wide selection of gardening supplies, tools, plants, and outdoor decor."
          />
          <meta
            property="og:title"
            content="Garden-Webshops-United-Kingdom - Garden Centres"
          />
          <meta
            property="og:description"
            content="Explore a vibrant array of online garden webshops offering a wide selection of gardening supplies, tools, plants, and outdoor decor."
          />
        </Head>
        < Header />

        <div className="garden-webshops-united-kingdom-hero">
          <span className="garden-webshops-united-kingdom-text">
            The best garden centres on the globe
          </span>
          <h1 className="hero-text">
            Magnificent things are very simple
          </h1>
        </div>
      </div>
      <div className="cards-container">
        <PlaceCard
          title="Horticentre"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_1.webp"
          link="https://www.horticentre.co.uk"
          description="Family-run garden centre since 1988 between Wakefield and Huddersfield. Visit our webshop or garden centre to find your plants &amp; garden supplies."
        ></PlaceCard>
        <PlaceCard
          title="Provender Nurseries"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_2.webp"
          link="https://www.provendernurseries.co.uk"
          description="Provender Nurseries in Swanley, Kent is an independent wholesaler of plants and products related to the landscape industry."
        ></PlaceCard>
        <PlaceCard
          title="Bark UK Online"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_3.webp"
          link="https://www.barkukonline.co.uk"
          description="Welcome to Bark UK Online. We specialize in bulk supplies for playground surfaces, chicken runs, and equestrian facilities."
        ></PlaceCard>
        <PlaceCard
          title="Garden Buyer"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_4.webp"
          link="https://www.gardenbuyer.co.uk"
          description="Gardenbuyer.co.uk, your ultimate destination for comparing the best gardening products available in the UK market."
        ></PlaceCard>
        <PlaceCard
          title="Cowell's Garden Centre"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_5.webp"
          link="https://www.cowellsgc.co.uk"
          description="Buy your plants at Cowell's Garden Centre in Newcastle near Northumberland, Gosforth, Ponteland and Jesmond."
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
          .garden-webshops-united-kingdom-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .garden-webshops-united-kingdom-header {
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
          .garden-webshops-united-kingdom-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .garden-webshops-united-kingdom-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .garden-webshops-united-kingdom-burger-menu {
            display: none;
          }
          .garden-webshops-united-kingdom-icon {
            width: 16px;
            height: 16px;
          }
          .garden-webshops-united-kingdom-mobile-menu {
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
          .garden-webshops-united-kingdom-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .garden-webshops-united-kingdom-container3 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 48px;
            justify-content: space-between;
          }
          .garden-webshops-united-kingdom-image {
            height: 2rem;
          }
          .garden-webshops-united-kingdom-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .garden-webshops-united-kingdom-icon02 {
            width: 16px;
            height: 16px;
          }
          .garden-webshops-united-kingdom-icon04 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .garden-webshops-united-kingdom-icon06 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .garden-webshops-united-kingdom-icon08 {
            width: 16px;
            height: 16px;
          }
          .garden-webshops-united-kingdom-hero {
            width: 100%;
            display: flex;
            padding: 48px;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('./assets/hero-8.webp');
            background-position: center;
          }
          .garden-webshops-united-kingdom-text {
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
            .garden-webshops-united-kingdom-header {
              padding-left: 32px;
              padding-right: 32px;
            }
            .garden-webshops-united-kingdom-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .garden-webshops-united-kingdom-hero {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .garden-webshops-united-kingdom-header {
              padding: var(--dl-space-space-unit);
            }
            .garden-webshops-united-kingdom-mobile-menu {
              padding: 16px;
            }
            .garden-webshops-united-kingdom-hero {
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

export default GardenWebshopsUnitedKingdom
