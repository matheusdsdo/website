import React from 'react';
import imglogo from './img/carrinho.png';

class Headers extends React.Component{
    render(){
        return(
            <nav>
                <div className="nav-wrapper blue-grey">
                    <a href="/" className="brand-logo light black-text"><img src={imglogo} alt="Logo" className="ajuste-logo"></img> Loja</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/produtos" className="black-text">Produtos</a></li>
                        <li><a href="/" className="black-text">Sobre</a></li>
                        <li><a href="/login" className="black-text">Login</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Headers;