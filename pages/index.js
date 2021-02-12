import React from 'react'

function HomePage() {
    return (
        <div className="main">
            <h1 className="welcome">Desculpa te desapontar, mas...</h1>
            <div className="center">
                <img className="eng" src={require('../img/icon_engrenagem.png')} alt="engrenagem"/>
                <h1>Esta página está em desenvolvimento.</h1>
                <h2>Por favor, fique tranquilo. Voltaremos em breve!</h2>
                <br></br>
                <a href="/home"><span id="back-btn">Página Inicial</span></a>
            </div>
        </div>
    )
}

export default HomePage