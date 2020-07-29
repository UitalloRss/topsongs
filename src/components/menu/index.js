import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';
function Menu(){
    return(
        <nav className="Menu">
            <a>
                <img className="Logo" src={Logo} alt="logo top-songs"/>
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;