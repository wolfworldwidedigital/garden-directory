import React from 'react'
import Head from 'next/head'
import PlaceCard from '../components/place-card'

import Header from '../components/header'

const TuinBlogsNederlands = (props) => {
  return (
    <>
      <div className="tuin-blogs-nederlands-container">
        <Head>
          <title>Tuin-Blogs-Nederlands - Garden Centres</title>
          <meta
            name="description"
            content="Explore a vibrant array of online garden webshops offering a wide selection of gardening supplies, tools, plants, and outdoor decor."
          />
          <meta
            property="og:title"
            content="Tuin-Blogs-Nederlands - Garden Centres"
          />
          <meta
            property="og:description"
            content="Explore a vibrant array of online garden webshops offering a wide selection of gardening supplies, tools, plants, and outdoor decor."
          />
        </Head>
        <div className="tuin-blogs-nederlands-hero">
          <span className="tuin-blogs-nederlands-text">
            The best garden centres on the globe
          </span>
          <h1 className="hero-text">
            Magnificent things are very simple
          </h1>
        </div>
      </div>
      <div className="cards-container">
          <PlaceCard
          title="Tuincentrumoverzicht.be"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_41.webp"
          link="https://www.tuincentrumoverzicht.be/"
          description="Tuincentrumoverzicht.be is de perfecte gids om een tuincentrum te vinden bij jou in de buurt. Volg ons ook voor leuke nieuwsberichten of vacatures."
        ></PlaceCard>
        <PlaceCard
          title="Tuincentrumoverzicht.nl"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_42.webp"
          link="https://www.tuincentrumoverzicht.nl"
          description="Tuincentrumoverzicht.nl is de perfecte gids om een tuincentrum te vinden bij jou in de buurt. Volg ons ook voor leuke nieuwsberichten of vacatures."
        ></PlaceCard>
        <PlaceCard
          title="Goodgardn.nl"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_43.webp"
          link="https://www.goodgardn.nl"
          description="De leukste blogsite voor huis & tuin inspiratie. Wekelijks nieuwe artikelen met de laatste trends, tips en tricks! Neem een kijkje op goodgardn.nl."
        ></PlaceCard>
                <PlaceCard
          title="Leefinjetuin.nl"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_44.webp"
          link="https://www.leefinjetuin.nl"
          description="Welkom op Leefinjetuin.nl! Op deze blog vind je allerlei inspiratie voor de inrichting van je tuin inclusief tips en tricks. Lees verder voor goed advies!"
        ></PlaceCard>
        <PlaceCard
          title="100procentgroen.eu"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_45.webp"
          link="https://www.100procentgroen.eu/"
          description=""
        ></PlaceCard>
                <PlaceCard
          title="Alleshuisentuin.nl"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_46.webp"
          link="https://www.alleshuisentuin.nl"
          description=""
        ></PlaceCard>
        <PlaceCard
          title="Bloemschikmateriaal.eu"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_47.webp"
          link="https://www.bloemschikmateriaal.eu/"
          description=""
        ></PlaceCard>
        <PlaceCard
          title="Buiteninjebuurt.nl"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_48.webp"
          link="https://www.buiteninjebuurt.nl"
          description=""
        ></PlaceCard>
        <PlaceCard
          title="Dekroononline.be"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_49.webp"
          link="https://www.dekroononline.be/"
          description=""
        ></PlaceCard>
        <PlaceCard
          title="Depuretuin.nl"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_50.webp"
          link="https://www.depuretuin.nl"
          description=""
        ></PlaceCard>
                <PlaceCard
          title="100procentgroen.eu"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_45.webp"
          link="https://www.100procentgroen.eu/"
          description=""
        ></PlaceCard>
        <PlaceCard
          title="Carice huis en tuin"
          image="https://fwovulbamubiffscpaez.supabase.co/storage/v1/object/public/linkbuilding_screenshots/screenshot_65.webp"
          link="https://www.carice.eu/"
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
          .tuin-blogs-nederlands-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tuin-blogs-nederlands-hero {
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
          .tuin-blogs-nederlands-text {
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
            .tuin-blogs-nederlands-hero {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .tuin-blogs-nederlands-hero {
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

export default TuinBlogsNederlands
