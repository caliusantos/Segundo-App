import React from 'react';
import './index.css';
import logo2 from '../../images/logo.png';

function Header()
{
    return(
        <header>
            <img id= 'tamanho' src= {logo2} alt= ''/> 
            <h1> Suiço Brasileira "Paulo Ernesto Tolle"</h1>
        </header>
    );
}

export default Header;