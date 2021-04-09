import React from 'react';
import imgparallax from '../img/lojainfo.jpg';

function Main(){
    return(
        <div>
            <div className="section no-pad-bot nome-loja">
                <div className="container center">
                    <div className="row center">
                        <h1>Loja exemplo</h1>
                    </div>
                </div>
            </div>

            <div className="row center">
                <div className="parallax-container fade">
                    <div className="section no-pad-bot">
                        <div className="container">
                            <h1 className="header center black-text bold">Confira todos os produtos!</h1>
                            <a href="/produtos" id="download-button" className="btn-large waves-effect waves-light black white-text">Produtos</a>
                        </div>
                    </div>
                <div className=" parallax-altura parallax"><img src={imgparallax} alt="Imagem ilustrativa"></img></div>
                </div>
            </div>
        </div>
    );
};

export default Main;