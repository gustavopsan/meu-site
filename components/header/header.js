import React from 'react'

import Menu from '../menu'

const Header = () => (
    <header className="app-header">
        <div className="app-header_container">
            <img className="app-header_img" src={require('../../assets/img/key-g.png')} />
            <span className="app-header_logo">Gustavo P. Santana</span>
            <Menu />
        </div>
    </header>
)

export default Header