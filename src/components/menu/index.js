import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo.png'
import './menu.css'
import Buttton from '../Button'

function Menu(){
    return (
        <nav className="Menu">
            <a to ="/">
                <img className="Logo" src = {Logo} alt="Logo"></img>
            </a>

            <Buttton as={Link} className="ButtonLink" to ="/cadastro/Video">
                Novo Video
            </Buttton>
        </nav>
    )
}

export default Menu