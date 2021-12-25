import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <Head>
        <title>Fayaz Rafeek</title>
        <meta name="description" content="Fayaz's portfolio website" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>

        <div className=" z-0 w-full h-full overflow-hidden absolute top-0 left-0">
          <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M523.5 315L0 2.5L1083.5 -2.5L1078.5 700.5H767.5L411.5 468L523.5 315Z" fill="url(#paint0_angular_201_5)"/>
            <defs>
            <radialGradient id="paint0_angular_201_5" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(541.75 349) rotate(90) scale(351.5 541.75)">
            <stop stop-color="#EFEFEF"/>
            <stop offset="0.65625" stop-color="#EFEFEF" stop-opacity="0"/>
            </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="z-10 flex flex-col justify-center items-center">

          <div className="avatar-parent overflow-hidden rounded-full w-40 h-40 shadow-lg">
            <img src="/images/avatar.jpeg" alt="Fayaz Rafeek" width={160} height={160} />
          </div>

          <div className="name text-xl mt-4 font-sans font-semibold text-gray-600">
            FAYAZ RAFEEK
          </div>

          <div className="tagline mt-3 font-medium text-gray-500 font-serif">
            A highly motivated <span className="text-green-700">Web Developer </span> / <span className="text-violet-700">Ui Designer </span> 
          </div>

          <div className="links mt-8 flex flex-row items-center justify-between">
            <Link href="https://github.com/Fayazrafeek">
              <div className="github flex flex-row gap-2 px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <Image src="/images/github.png" alt="Github" width={24} height={24} />
                <p>Github</p>
              </div>
            </Link>
            <Link href="https://twitter.com/FayazmRafeek">
            <div className="twitter flex flex-row gap-2 px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <Image src="/images/twitter.png" alt="Github" width={24} height={24} />
              <p>Twitter</p>
            </div>
            </Link>
            <Link href="https://www.linkedin.com/in/fayaz-rafeek-0a3064211">
            <div className="linkedIn flex flex-row gap-2 px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <Image src="/images/linkedin.png" alt="Github" width={24} height={24} />
              <p>LinkedIn</p>
            </div>
            </Link>
          </div>

        </div>

    </div>
  )
}
