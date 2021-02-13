import React from 'react'

const Menu = () => (
    <nav className="app-menu">
        <ul className="app-menu_list">
            <li className="app-menu_item">
                <a className="app-menu_link" href="/">
                    Home
                </a>
            </li>
            <li className="app-menu_item">
                <a className="app-menu_link" href="/contato">
                    Fale Comigo
                </a>
            </li>
            <li className="app-menu_item">
                <a className="app-menu_link" href="/sobre">
                    Sobre Mim
                </a>
            </li>
            <li className="app-menu_item">
                <a className="app-menu_link" href="/projetos">
                    Projetos
                </a>
            </li>
        </ul>
    </nav>
)

export default Menu