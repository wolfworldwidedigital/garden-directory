import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/Header'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Garden Centres</title>
          <meta
            name="description"
            content="Explore a vibrant array of online garden webshops offering a wide selection of gardening supplies, tools, plants, and outdoor decor."
          />
          <meta property="og:title" content="Garden Centres" />
          <meta
            property="og:description"
            content="Explore a vibrant array of online garden webshops offering a wide selection of gardening supplies, tools, plants, and outdoor decor."
          />
        </Head>
        < Header />
        <div className="home-hero">

          <span className="home-text">
            The best garden centres on the globe
          </span>
<div className="transition-transform transform opacity-100 scale-100 hover:opacity-0 hover:scale-110 duration-300 ease-out">
          <p className="hero-text">
          Magnificent things are very simple
          </p>
          </div>
        </div>
        <div id="main-section" className="home-main">
          <h1>Garden Webshops United Kingdom</h1>
          <span className="home-text03">
            <span>
              Explore a vibrant array of online garden webshops in the United
              Kingdom, offering a wide selection of gardening supplies, tools,
              plants, and outdoor decor. Whether you&apos;re a seasoned gardener
              or a novice enthusiast, these webshops provide a convenient and
              diverse shopping experience, allowing you to transform your
              outdoor space with quality products delivered right to your
              doorstep.
            </span>
            <br className="home-text05"></br>
            <br></br>
            <br className="home-text07"></br>
            <br></br>
          </span>
          <div className="home-cards-container">
            <div className="home-container04">
              <img
                src="./assets/Flag of United Kingdom.H03.2k.webp"
                className="home-image01"
              />
              <div className="home-container05">
                <Link href="/garden-webshops-united-kingdom">
                  <a className="home-link button">
                    Garden Webshops United Kingdom
                  </a>
                </Link>
              </div>
            </div>
            <div className="home-container06">
              <img
                alt="garden-webshops-ireland"
                src="./assets/ireland-flag.webp"
                className="home-image02"
              />
              <div className="home-container07">
                <Link href="/garden-webshops-ireland">
                  <a className="home-link01 button">Garden Webshops Ireland</a>
                </Link>
              </div>
            </div>
            <div className="home-container08">
              <img
                alt="image"
                src="./assets/canada-flag.webp"
                className="home-image03"
              />
              <div className="home-container09">
                <Link href="/garden-centres-canada">
                  <a className="home-link02 button">Garden Centres Canada</a>
                </Link>
              </div>
            </div>
            <div className="home-container10">
              <img
                alt="Garden Centres United Kingdom"
                src="./assets/flag-uk.webp"
                className="home-image04"
              />
              <div className="home-container11">
                <Link href="/garden-centres-united-kingdom">
                  <a className="home-link03 button">
                    Garden Centres United Kingdom
                  </a>
                </Link>
              </div>
            </div>
            <div className="home-container12">
              <img
                alt="Tuincentrum leveranciers"
                src="./assets/leveranciers.webp"
                className="home-image05"
              />
              <div className="home-container13 button">
                <Link href="/tuincentrum-leveranciers">
                  <a className="home-link04 button">Tuincentrum leveranciers</a>
                </Link>
              </div>
            </div>
            <div className="home-container14">
              <img
                alt="Tuin blogs Nederlands"
                src="./assets/nl-flag.webp"
                className="home-image06"
              />
              <div className="home-container15">
                <span className="home-text09 button">
                  Tuin blogs Nederlands
                </span>
              </div>
            </div>
            <div className="home-container16">
              <img
                alt="image"
                src="./assets/uk-flag.webp"
                className="home-image07"
              />
              <div className="home-container17">
                <Link href="/tuin-blogs-engels">
                  <a className="home-link05 button">Tuin blogs Engels</a>
                </Link>
              </div>
            </div>
            <div className="home-container18">
              <img
                alt="image"
                src="./assets/nl-flag.webp"
                className="home-image08"
              />
              <div className="home-container19">
                <Link href="/webshops-nederland-en-belgie">
                  <a className="home-link06 button">
                    Webshops Nederland en Belgie
                  </a>
                </Link>
              </div>
            </div>
            <div className="home-container20">
              <img
                alt="image"
                src="./assets/belgium-flag.webp"
                className="home-image09"
              />
              <div className="home-container21">
                <Link href="/tuincentra-nederland-en-belgie">
                  <a className="home-link07 button">
                    Tuincentra Nederland en Belgie
                  </a>
                </Link>
              </div>
            </div>
            <div className="home-container22">
              <img
                alt="image"
                src="./assets/dieren.webp"
                className="home-image10"
              />
              <div className="home-container23">
                <span className="home-text10 button">
                  <Link href="/dierenwinkel">
                    <a className="home-link08">Dierenwinkels</a>
                  </Link>
                  <Link href="/dierenwinkel">
                    <a>
                      <br className="home-text11"></br>
                    </a>
                  </Link>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-container24">
              <img
                alt="image"
                src="./assets/divers.webp"
                className="home-image11"
              />
              <div className="home-container25">
                <Link href="/divers">
                  <a className="home-link10 button">Divers</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="home-footer">
          <div className="home-menu">
            <h1>Travel</h1>
            <div className="home-links-container">
              <div className="home-container26">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link11"
                >
                  Tour packages
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link12"
                >
                  Personalized offers
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link13"
                >
                  Special deals
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link14"
                >
                  Summer holiday
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </a>
              </div>
              <div className="home-container27">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link15"
                >
                  About us
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link16"
                >
                  FAQ
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link17"
                >
                  Terms and conditions
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link18"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="home-follow-container">
              <span className="home-text13">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="home-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link19"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon10"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link20"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon12"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link21"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon14"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            width: 100%;
            display: flex;
            max-width: 1400px;
            align-self: center;
            box-shadow: 5px 5px 10px 5px #000000;
            padding-top: 32px;
            border-color: var(--dl-color-gray-black);
            border-style: solid;
            border-width: 1px;
            padding-left: 48px;
            padding-right: 48px;
            animation-name: none;
            flex-direction: row;
            padding-bottom: 32px;
            animation-delay: 0s;
            justify-content: space-between;
            background-color: rgba(217, 217, 217, 0);
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-container01 {
            width: 1132px;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-container02 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: 16px;
            height: 16px;
          }
          .home-mobile-menu {
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
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container03 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 48px;
            justify-content: space-between;
          }
          .home-image {
            height: 2rem;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: 16px;
            height: 16px;
          }
          .home-icon04 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .home-icon06 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .home-icon08 {
            width: 16px;
            height: 16px;
          }
          .home-hero {
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
          .home-text {
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
          .home-main {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-quadruple);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-quadruple);
            justify-content: flex-start;
          }
          .home-text03 {
            color: var(--dl-color-gray-500);
            text-align: center;
          }
          .home-text05 {
            color: var(--dl-color-gray-500);
          }
          .home-text07 {
            color: var(--dl-color-gray-500);
          }
          .home-cards-container {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-doubleunit);
            flex-wrap: wrap;
            max-width: 1000px;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container04 {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-image01 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .home-container05 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            flex-direction: column;
          }
          .home-link {
            font-size: 20px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
          }
          .home-container06 {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-image02 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .home-container07 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
          }
          .home-link01 {
            font-size: 20px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
          }
          .home-container08 {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-image03 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .home-container09 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
          }
          .home-link02 {
            font-size: 20px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
          }
          .home-container10 {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-image04 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .home-container11 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
          }
          .home-link03 {
            font-size: 20px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
          }
          .home-container12 {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-image05 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .home-container13 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: center;
            align-items: center;
            flex-direction: column;
          }
          .home-link04 {
            font-size: 20px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .home-container14 {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-image06 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .home-container15 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
          }
          .home-text09 {
            font-size: 20px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
          }
          .home-container16 {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-image07 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .home-container17 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
          }
          .home-link05 {
            font-size: 20px;
            align-self: center;
            font-style: normal;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
          }
          .home-container18 {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-image08 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .home-container19 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
          }
          .home-link06 {
            font-size: 20px;
            align-self: center;
            font-style: normal;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
          }
          .home-container20 {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-image09 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .home-container21 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
          }
          .home-link07 {
            font-size: 20px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
          }
          .home-container22 {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-image10 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .home-container23 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
          }
          .home-text10 {
            font-size: 20px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-link08 {
            text-decoration: underline;
          }
          .home-text11 {
            text-decoration: underline;
          }
          .home-container24 {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-image11 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .home-container25 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
          }
          .home-link10 {
            font-size: 20px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
          }
          .home-footer {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-menu {
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container26 {
            display: flex;
            align-items: flex-start;
            margin-left: 100px;
            flex-direction: column;
          }
          .home-link11 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link12 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link13 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link14 {
            text-decoration: none;
          }
          .home-container27 {
            display: flex;
            align-items: flex-start;
            margin-left: 100px;
            flex-direction: column;
          }
          .home-link15 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link16 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link17 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link18 {
            text-decoration: none;
          }
          .home-follow-container {
            display: flex;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text13 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-icons-container {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link19 {
            display: contents;
          }
          .home-icon10 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .home-link20 {
            display: contents;
          }
          .home-icon12 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .home-link21 {
            display: contents;
          }
          .home-icon14 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .home-cards-container {
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .home-header {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-hero {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-main {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container04 {
              width: 200px;
            }
            .home-container06 {
              width: 200px;
            }
            .home-container08 {
              width: 200px;
            }
            .home-container10 {
              width: 200px;
            }
            .home-container12 {
              width: 200px;
            }
            .home-container14 {
              width: 200px;
            }
            .home-container16 {
              width: 200px;
            }
            .home-container18 {
              width: 200px;
            }
            .home-container20 {
              width: 200px;
            }
            .home-container22 {
              width: 200px;
            }
            .home-container24 {
              width: 200px;
            }
            .home-menu {
              flex-direction: column;
            }
            .home-links-container {
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
              justify-content: space-between;
            }
            .home-container26 {
              margin-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .home-header {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-hero {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .home-container04 {
              width: 300px;
            }
            .home-container06 {
              width: 300px;
            }
            .home-container08 {
              width: 300px;
            }
            .home-container10 {
              width: 300px;
            }
            .home-container12 {
              width: 300px;
            }
            .home-container14 {
              width: 300px;
            }
            .home-container16 {
              width: 300px;
            }
            .home-container18 {
              width: 300px;
            }
            .home-container20 {
              width: 300px;
            }
            .home-container22 {
              width: 300px;
            }
            .home-container24 {
              width: 300px;
            }
            .home-links-container {
              margin-top: var(--dl-space-space-doubleunit);
              align-items: flex-start;
              justify-content: flex-start;
            }
            .home-link11 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link12 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link13 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link14 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-container27 {
              height: 100%;
              align-items: flex-start;
              margin-left: 50px;
            }
            .home-link15 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link16 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link17 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link18 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-follow-container {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
