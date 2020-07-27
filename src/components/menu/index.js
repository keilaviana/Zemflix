import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './menu.css'
import Buttton from '../Button'

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src = {Logo} alt="Logo"></img>
            </a>

            <Buttton as="a" className="ButtonLink" href="/">
                Novo Video
            </Buttton>
        </nav>
    )
}

export default Menu