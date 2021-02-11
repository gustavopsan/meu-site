import React from 'react'

function HomePage() {
    return (
        <div>
            <h1 className="welcome">Bem vindo ao meu website!</h1>
            <div className="center">
                <a href="/"><img className="eng" src={require('../img/icon_engrenagem.png')} alt="engrenagem"/></a>
                <h1>Estamos em desenvolvimento...</h1>
                <h2>Por favor, fique calmo. Voltaremos em breve!</h2>
            </div>
        </div>
    )
}

export default HomePage