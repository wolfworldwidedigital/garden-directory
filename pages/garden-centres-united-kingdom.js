import React from 'react'
import Head from 'next/head'
import PlaceCard from '../components/place-card'
import Header from '../components/Header'

const GardenCentresUnitedKingdom = (props) => {
  return (
    <>
      <div className="garden-centres-united-kingdom-container">
        <Head>
          <title>Garden-Centres-United-Kingdom - Garden Centres</title>
          <meta
            name="description"
            content="Explore a vibrant array of online garden webshops offering a wide selection of gardening supplies, tools, plants, and outdoor decor."
          />
          <meta
            property="og:title"
            content="Garden-Centres-United-Kingdom - Garden Centres"
          />
          <meta
            property="og:description"
            content="Explore a vibrant array of online garden webshops offering a wide selection of gardening supplies, tools, plants, and outdoor decor."
          />
        </Head>
        < Header />
        <div className="garden-centres-united-kingdom-hero">
          <span className="garden-centres-united-kingdom-text">
            The best garden centres on the globe
          </span>
          <h1 className="hero-text">
            Magnificent things are very simple
          </h1>
        </div>
      </div>
      <div className="cards-container">
          <PlaceCard
          title="Elmwood Garden Centre"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_19.webp"
          link="https://www.elmwoodgardencentre.co.uk"
          description="Elmwood Garden Centre is located in Bristol and has its own nursery. Visit us and check our wide range of outdoor plants, bulbs, perennials and many more."
        ></PlaceCard>
        <PlaceCard
          title="Knights Garden Centre"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_20.webp"
          link="https://www.knightsgardencentres.com"
          description="Welcome to Knights Garden Centre in the UK! We have a wide range of plants, outdoor living, bulbs & seeds and many more. Our experts will be happy to help you!"
        ></PlaceCard>
        <PlaceCard
          title="Merryhatton Garden Centre"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_21.webp"
          link="https://www.merryhatton.co.uk"
          description="Welcome to Merryhatton Garden Centre in North Berwick! We have a wide range of plants, garden furniture, pots & planters and many more! Visit today!"
        ></PlaceCard>
        <PlaceCard
          title="Ripley Nurseries"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_22.webp"
          link="https://www.ripleynurseries.co.uk"
          description="Ripley Nurseries: your plant centre in Guildford. We also have the widest range of garden building in Surrey. Visit our garden centre today!"
        ></PlaceCard>
        <PlaceCard
          title="Radway Bridge Garden Centre"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_23.webp"
          link="https://www.radwaybridgegardencentre.com"
          description="Radway Bridge Garden Centre - Find everything you need for your garden from plants, tools, gifts and a scrumptious Hereford Restaurant."
        ></PlaceCard>
        <PlaceCard
          title="Thirsk Garden Centre"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_24.webp"
          link="https://www.thirskgardencentre.co.uk"
          description="Welcome to Thirsk Garden Centre in North Yorkshire! We have a wide range of plants, garden furniture, pots and many more. We are happy to help you!"
        ></PlaceCard>
        <PlaceCard
          title="Welland Vale"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_25.webp"
          link="https://www.wellandvale.co.uk"
          description="NULL"
        ></PlaceCard>
        <PlaceCard
          title="Slemish Landscape Centre"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_26.webp"
          link="https://www.slemishlandscapecentre.com"
          description="NULL"
        ></PlaceCard>
        <PlaceCard
          title="Trioscape Garden Centre"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_27.webp"
          link="https://www.trioscape.co.uk"
          description="Welcome to Trioscape Garden Centre in Gloucestershire! We have a wide range of plants, garden furniture, BBQs and many more. We are happy to help you."
        ></PlaceCard>
        <PlaceCard
          title="Creative Gardens"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_28.webp"
          link="https://www.creativegardens.com"
          description="Creative Gardens gained a reputation for quality, experience and style with our inspirational plant, gift and outdoor living displays. Visit us!"
        ></PlaceCard>
        <PlaceCard
          title="Birkacre"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_29.webp"
          link="https://www.birkacre.co.uk"
          description="Birkacre, your garden centre near Chorley, Coppul, Wigan, Bolton and Leyland for all your garden furniture, barbecues, plants and gardening needs."
        ></PlaceCard>
        <PlaceCard
          title="Coblands Garden Centre"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_30.webp"
          link="https://coblandsgardencentre.co.uk"
          description="Check the opening hours, promotions and product range of Coblands Garden Centre in Sevenoaks, Kent"
        ></PlaceCard>
        <PlaceCard
          title="Codsall & Wergs Garden Centre"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_31.webp"
          link="https://www.codsallandwergs.co.uk"
          description="Check the opening hours, promotions and product range of Codsall & Wergs Garden Centre in Wolverhampton"
        ></PlaceCard>
        <PlaceCard
          title="Henry Street Garden Centre"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_32.webp"
          link="https://www.henrystreet.co.uk"
          description="Check the opening hours, promotions and product range of Henry Street Garden Centre in Arborfield, Reading"
        ></PlaceCard>
        <PlaceCard
          title="Horticentre"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_33.webp"
          link="https://www.horticentre.co.uk"
          description="Family-run garden centre since 1988 between Wakefield and Huddersfield. Visit our webshop or garden centre to find your plants & garden supplies."
        ></PlaceCard>
        <PlaceCard
          title="Millbrook Garden Centre"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_34.webp"
          link="https://www.millbrookgc.co.uk"
          description="Check the opening hours, promotions, and product range of Millbrook Garden Centre in Staplehurst and Gravesend."
        ></PlaceCard>
        <PlaceCard
          title="Rushfields Plant Centre"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_35.webp"
          link="https://www.rushfields.com"
          description="Welcome to Rushfields Plant Centre, the home of all your favourite gardening products from pest control to compost, Christmas trees to coffee at the Cafe."
        ></PlaceCard>
        <PlaceCard
          title="Stewarts Garden Centre"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_36.webp"
          link="https://www.stewarts.co.uk"
          description="Check the opening hours, promotions and product range of Stewarts Garden Centre in Dorset and Hampshire"
        ></PlaceCard>
        <PlaceCard
          title="Thompsons Plants"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_37.webp"
          link="https://www.thompsons-plants.co.uk"
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
          .garden-centres-united-kingdom-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .garden-centres-united-kingdom-header {
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
          .garden-centres-united-kingdom-nav {
            width: 877px;
            height: 29px;
            display: flex;
          }
          .garden-centres-united-kingdom-btn-group {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .garden-centres-united-kingdom-burger-menu {
            display: none;
          }
          .garden-centres-united-kingdom-icon {
            width: 16px;
            height: 16px;
          }
          .garden-centres-united-kingdom-mobile-menu {
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
          .garden-centres-united-kingdom-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .garden-centres-united-kingdom-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 48px;
            justify-content: space-between;
          }
          .garden-centres-united-kingdom-image {
            height: 2rem;
          }
          .garden-centres-united-kingdom-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .garden-centres-united-kingdom-icon02 {
            width: 16px;
            height: 16px;
          }
          .garden-centres-united-kingdom-icon04 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .garden-centres-united-kingdom-icon06 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .garden-centres-united-kingdom-icon08 {
            width: 16px;
            height: 16px;
          }
          .garden-centres-united-kingdom-hero {
            width: 100%;
            display: flex;
            padding: 48px;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('./assets/hero-3.webp');
            background-position: center;
          }
          .garden-centres-united-kingdom-text {
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
            .garden-centres-united-kingdom-header {
              padding-left: 32px;
              padding-right: 32px;
            }
            .garden-centres-united-kingdom-nav {
              display: none;
            }
            .garden-centres-united-kingdom-btn-group {
              display: none;
            }
            .garden-centres-united-kingdom-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .garden-centres-united-kingdom-hero {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .garden-centres-united-kingdom-header {
              padding: var(--dl-space-space-unit);
            }
            .garden-centres-united-kingdom-mobile-menu {
              padding: 16px;
            }
            .garden-centres-united-kingdom-hero {
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

export default GardenCentresUnitedKingdom
