import React from 'react'
import Helmet from 'react-helmet'

import Footer from '../components/footer'
import Header from '../components/header'

function HomePage() {
    return (
        <>
            <Helmet>
                <title>Home - Gustavo P. Santana</title>
            </Helmet>
            <Header />
            <h1>Dessa vez temos uma homepage, ou quase...</h1>
            <Footer />
        </>
    )
}

export default HomePage