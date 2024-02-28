import React from 'react'
import Head from 'next/head'
import PlaceCard from '../components/place-card'
import Header from '../components/Header'

import Nav1 from '../components/nav1'
import Nav2 from '../components/nav2'

const TuinBlogsEngels = (props) => {
  return (
    <>
      <div className="tuin-blogs-engels-container">
        <Head>
          <title>Tuin-Blogs-Engels - Garden Centres</title>
          <meta
            name="description"
            content="Explore a vibrant array of online garden webshops offering a wide selection of gardening supplies, tools, plants, and outdoor decor."
          />
          <meta
            property="og:title"
            content="Tuin-Blogs-Engels - Garden Centres"
          />
          <meta
            property="og:description"
            content="Explore a vibrant array of online garden webshops offering a wide selection of gardening supplies, tools, plants, and outdoor decor."
          />
        </Head>
        < Header />

        <div className="tuin-blogs-engels-hero">
          <span className="tuin-blogs-engels-text">
            The best garden centres on the globe
          </span>
          <h1 className="hero-text">
            Magnificent things are very simple
          </h1>
        </div>
      </div>
      <div className="cards-container">
          <PlaceCard
          title="goodgardn.co.uk"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_67.webp"
          link="https://www.goodgardn.co.uk"
          description="The best blog site for home & garden inspiration. New articles every week with the latest trends, tips and tricks! Take a look at goodgardn.co.uk."
        ></PlaceCard>
        <PlaceCard
          title="gardencenterguide.com"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_68.webp"
          link="https://www.gardencenterguide.com"
          description="Gardencenterguide.com is the perfect online portal to garden centers nearby. We have a list of almost all the Garden Centers in the USA."
        ></PlaceCard>
        <PlaceCard
          title="gardencentreguide.co.uk"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_69.webp"
          link="https://www.gardencentreguide.co.uk"
          description="Gardencentreguide.co.uk is the UK's Number 1 Website to find a garden centre near you. We provide you with all the need to know information about gardening."
        ></PlaceCard>
        <PlaceCard
          title="designgarden.eu"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_70.webp"
          link="https://www.designgarden.eu/"
          description=""
        ></PlaceCard>
        <PlaceCard
          title="onlinegardeningcentre.co.uk"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_71.webp"
          link="https://www.onlinegardeningcentre.co.uk"
          description=""
        ></PlaceCard>
        <PlaceCard
          title="city-garden.eu"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_72.webp"
          link="https://www.city-garden.eu/"
          description=""
        ></PlaceCard>
        <PlaceCard
          title="gardenexpert.eu"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_73.webp"
          link="https://www.gardenexpert.eu/"
          description=""
        ></PlaceCard>
        <PlaceCard
          title="https://www.gardeningagency.co.uk/"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_74.webp"
          link="https://www.gardeningagency.co.uk/"
          description=""
        ></PlaceCard>
        <PlaceCard
          title="lifeplanters.eu"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_75.webp"
          link="https://www.lifeplanters.eu/"
          description=""
        ></PlaceCard>
        <PlaceCard
          title="expertgardening.co.uk"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_76.webp"
          link="https://www.expertgardening.co.uk"
          description=""
        ></PlaceCard>
        <PlaceCard
          title="gardenclublistings.co.uk"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_77.webp"
          link="https://www.gardenclublistings.co.uk"
          description=""
        ></PlaceCard>
        <PlaceCard
          title="marchisio.eu"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_78.webp"
          link="https://www.marchisio.eu/"
          description=""
        ></PlaceCard>
        <PlaceCard
          title="royalgardens.eu"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_79.webp"
          link="https://www.royalgardens.eu/"
          description=""
        ></PlaceCard>
                <PlaceCard
          title="https://www.gardeningagency.co.uk/"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_74.webp"
          link="https://www.gardeningagency.co.uk/"
          description=""
        ></PlaceCard>
        <PlaceCard
          title="lifeplanters.eu"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_75.webp"
          link="https://www.lifeplanters.eu/"
          description=""
        ></PlaceCard>
        <PlaceCard
          title="expertgardening.co.uk"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_76.webp"
          link="https://www.expertgardening.co.uk"
          description=""
        ></PlaceCard>
        <PlaceCard
          title="gardenclublistings.co.uk"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_77.webp"
          link="https://www.gardenclublistings.co.uk"
          description=""
        ></PlaceCard>
        <PlaceCard
          title="marchisio.eu"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_78.webp"
          link="https://www.marchisio.eu/"
          description=""
        ></PlaceCard>
        <PlaceCard
          title="royalgardens.eu"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_79.webp"
          link="https://www.royalgardens.eu/"
          description=""
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
          .tuin-blogs-engels-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tuin-blogs-engels-header {
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
          .tuin-blogs-engels-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .tuin-blogs-engels-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .tuin-blogs-engels-burger-menu {
            display: none;
          }
          .tuin-blogs-engels-icon {
            width: 16px;
            height: 16px;
          }
          .tuin-blogs-engels-mobile-menu {
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
          .tuin-blogs-engels-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .tuin-blogs-engels-container3 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 48px;
            justify-content: space-between;
          }
          .tuin-blogs-engels-image {
            height: 2rem;
          }
          .tuin-blogs-engels-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .tuin-blogs-engels-icon02 {
            width: 16px;
            height: 16px;
          }
          .tuin-blogs-engels-icon04 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .tuin-blogs-engels-icon06 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .tuin-blogs-engels-icon08 {
            width: 16px;
            height: 16px;
          }
          .tuin-blogs-engels-hero {
            width: 100%;
            display: flex;
            padding: 48px;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('./assets/hero-7.webp');
            background-position: center;
          }
          .tuin-blogs-engels-text {
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
            .tuin-blogs-engels-header {
              padding-left: 32px;
              padding-right: 32px;
            }
            .tuin-blogs-engels-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .tuin-blogs-engels-hero {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .tuin-blogs-engels-header {
              padding: var(--dl-space-space-unit);
            }
            .tuin-blogs-engels-mobile-menu {
              padding: 16px;
            }
            .tuin-blogs-engels-hero {
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

export default TuinBlogsEngels
