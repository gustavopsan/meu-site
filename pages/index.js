import React from 'react'
import Helmet from 'react-helmet'

import Footer from '../components/footer'
import Header from '../components/header'
import Container from '../components/container'

function HomePage() {
    return (
        <>
            <Helmet>
                <title>Gustavo P. Santana - Desenvolvedor Frontend</title>
            </Helmet>
            <Header />
            <Container bg_img={require('../assets/img/yellow_pen.jpg')}>
                <h1 className="titlewt">Construímos seu site com a melhor e mais atual tecnologia do mercado!</h1>
            </Container>
            <Container bg_img={require('../assets/img/blue_wall.jpg')}>
                <h1 className="titlebk">Tiramos sua ideia do papel e transformamos em algo que todos podem admirar!</h1>
            </Container>
            <Footer />
        </>
    )
}

export default HomePage