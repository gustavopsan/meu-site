import React from 'react'

const Footer = () => (
    <>
        <footer className="app-footer_icons">
            <span className="app-footer__message">
                <a href="https://github.com/gustavopsan">
                    <img className="social-icon" src={require('../../assets/img/github.png')} />
                </a>
                <a href="https://instagram.com/gustavopsantana4">
                    <img className="social-icon" src={require('../../assets/img/instagram.png')} />
                </a>
                <a href="https://www.linkedin.com/in/gustavo-p-santana-9584b2199/">
                    <img className="social-icon" src={require('../../assets/img/linkedin.png')} />
                </a>
            </span>
        </footer>

        <footer className="app-footer">
            <span className="app-footer__message">
                Todos os direitos reservados © Gustavo P. Santana
            </span>
        </footer>
    </>
)

export default Footer
