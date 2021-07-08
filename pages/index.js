import React from 'react'
import Helmet from 'react-helmet'
import {Adsense} from '@ctrl/react-adsense'

import Footer from '../components/footer'
import Header from '../components/header'
import Container from '../components/container'

function HomePage() {
    return (
        <>
            <Helmet>
                <title>Gustavo P. Santana - Desenvolvedor Frontend</title>
                <link rel="apple-touch-icon" sizes="180x180" href={require('../assets/icons/apple-touch-icon.png')} />
                <link rel="icon" type="image/png" sizes="32x32" href={require('../assets/icons/favicon-32x32.png')} />
                <link rel="icon" type="image/png" sizes="16x16" href={require('../assets/icons/favicon-16x16.png')} />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="description" content="Website de Desenvolvedor" />
                <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <script>
                    {`(adsbygoogle = window.adsbygoogle || []).push({ google_ad_client: "ca-pub-4865440295689037", enable_page_level_ads: true });`}
                </script>
            </Helmet>
            <Header />
            <Container bg_img={require('../assets/img/yellow_pen.jpg')}>
                <h1 className="titlewt">Construímos seu site com a melhor e mais atual tecnologia do mercado!</h1>
            </Container>
            <Container bg_img={require('../assets/img/blue_wall.jpg')}>
                <h1 className="titlebk">Tiramos sua ideia do papel e transformamos em algo que todos podem admirar!</h1>
            </Container>

            <Adsense
                client="ca-pub-4865440295689037"
                slot="7211799398"
                style={{ display: 'block' }}
                layout="in-article"
                format="auto"
                responsive="true"
            />

            <Footer />
        </>
    )
}

export default HomePage