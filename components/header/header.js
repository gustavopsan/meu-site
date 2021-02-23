import React from 'react'

import Menu from '../menu'

const Header = () => (
    <header className="app-header">
        <div className="app-header_container">
            <img alt="logo" height="60" width="60" className="app-header_img" src={require('../../assets/img/key-g.png')} />
            <br /><span className="app-header_logo">Gustavo P. Santana</span>
            <br /><Menu />
        </div>
    </header>
)

export default Header