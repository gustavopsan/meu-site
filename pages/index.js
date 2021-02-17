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
            <Container>
                <h1>Dessa vez temos uma homepage, ou quase...</h1>
            </Container>
            <Footer />
        </>
    )
}

export default HomePage