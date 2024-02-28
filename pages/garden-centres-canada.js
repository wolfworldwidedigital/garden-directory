import React from 'react'
import Head from 'next/head'
import PlaceCard from '../components/place-card'
import Header from '../components/Header'

const GardenCentresCanada = (props) => {
  return (
    <>
      <div className="garden-centres-canada-container">
        <Head>
          <title>Garden-Centres-Canada - Garden Centres</title>
          <meta
            name="description"
            content="Explore a vibrant array of online garden webshops offering a wide selection of gardening supplies, tools, plants, and outdoor decor."
          />
          <meta
            property="og:title"
            content="Garden-Centres-Canada - Garden Centres"
          />
          <meta
            property="og:description"
            content="Explore a vibrant array of online garden webshops offering a wide selection of gardening supplies, tools, plants, and outdoor decor."
          />
        </Head>
        < Header />
        <div className="garden-centres-canada-hero">
          <span className="garden-centres-canada-text">
            The best garden centres on the globe
          </span>
          <h1 className="hero-text">
            Magnificent things are very simple
          </h1>
        </div>
      </div>
      <div className="cards-container">
          <PlaceCard
          title="GARDENWORKS"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_9.webp"
          link="https://www.gardenworks.ca"
          description="GARDENWORKS is one of the best in Canada. We stock a huge range of beautiful plants, garden supplies, pottery & home décor as well as expert advice."
        ></PlaceCard>
        <PlaceCard
          title="Lacoste Garden Centre"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_10.webp"
          link="https://www.lacostegardencentre.com"
          description="Lacoste Garden Centre is a family-owned business that offers plants and expert horticultural advice. Visit our garden centre in Winnipeg and get inspired."
        ></PlaceCard>
        <PlaceCard
          title="Garden Retreat"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_11.webp"
          link="https://www.gardenretreat.ca"
          description="Check the opening hours, promotions and product range of Garden Retreat in Calgary."
        ></PlaceCard>
        <PlaceCard
          title="Oxford Insta-Shade"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_12.webp"
          link="https://www.oxfordinstashade.com"
          description="Check the opening hours, promotions and product range of Oxford Insta-Shade in Burgessville, Ontario."
        ></PlaceCard>
        <PlaceCard
          title="Little Tree Garden Market"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_13.webp"
          link="https://www.littletreegardenmarket.ca"
          description="Visit Little Tree Garden Market in Fergus, Ontario. We stock a huge range of houseplants, trees, annuals, shrubs, pots, and many more. Visit us today!"
        ></PlaceCard>
        <PlaceCard
          title="Greyhaven Gardens"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_14.webp"
          link="https://www.greyhavengardens.com"
          description="NULL"
        ></PlaceCard>
        <PlaceCard
          title="Buckerfield's Coutry Stores"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_15.webp"
          link="https://www.buckerfields.ca"
          description="Check the opening hours, promotions and product range of Buckerfield's Coutry Stores in British Columbia (BC)."
        ></PlaceCard>
        <PlaceCard
          title="Walter Greenhouse"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_16.webp"
          link="https://www.waltergreenhouse.ca"
          description="NULL"
        ></PlaceCard>
        <PlaceCard
          title="Triple Tree Nurseryland"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_17.webp"
          link="https://www.tripletreenurseryland.com"
          description="Triple Tree Nurseryland in Maple Ridge is British Columbia’s source for garden beauty and inspiration! Visit us for your plants, fish ponds, and more."
        ></PlaceCard>
        <PlaceCard
          title="Wildwood Outdoor Living"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_18.webp"
          link="https://www.wildwoodoutdoorliving.com"
          description="Canada's online and in-store Garden Centre! Gardening supplies, plants, furniture, gardening tips and more for beginners & expert gardeners!"
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
          .garden-centres-canada-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .garden-centres-canada-hero {
            width: 100%;
            display: flex;
            padding: 48px;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('./assets/hero-2.webp');
            background-position: center;
          }
          .garden-centres-canada-text {
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
            .garden-centres-canada-hero {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .garden-centres-canada-hero {
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

export default GardenCentresCanada
