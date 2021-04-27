import React from 'react';
import imglogo from '../img/login.png';


function Login(){
    return(
        <div className="section no-pad-bot">
            <div className="container">
                <div className="row center">
                    <div className="ajuste-loginlogo">
                        <img src={imglogo} alt="Logo" className="login-tamanho"/>
                    </div>
                    <div className="ajuste-logincampos">
                        <div className="input-field col s12">
                            <input id="user" type="text" className="validate"/>
                            <label for="user">Usuario</label>
                        </div>
                        </div>
                        <div className="ajuste-logincampos">
                        <div className="input-field col s12">
                            <input id="pass" type="password" className="validate"/>
                            <label for="pass">Senha</label>
                        </div>
                        </div>
                            <a className="waves-effect waves-light btn grey black-text"><i class="material-icons left">person</i>Login</a>
                            <a href="/adicionar" className="waves-effect waves-light btn grey black-text"><i class="material-icons left">folder_shared</i>Cadastrar</a>
                    </div>
                </div>
            </div>
    );
};

export default Login;