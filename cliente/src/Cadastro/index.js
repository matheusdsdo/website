import React, { useState } from 'react';
import imgCadastro from '../img/MEU-CADASTRO.png';
import axios from 'axios';

function Cadastro(){

    const[user, setUser] = useState('')
    const[pass, setPass] = useState('')
    const[email, setEmail] = useState('')

    const adiciona = () => {
        axios.post('http://localhost:3001/adicionar', {
            user: user,
            pass: pass,
            email: email,  
          })
          .then(() => {
              console.log('Sucesso!')
              window.location.href = '/Login'
          })
    };

    return(
       <div>
            <div className="section no-pad-bot">
                <div className="container">
                    <div className="row center">
                        <img src={imgCadastro} className="login-tamanho" />
                        <div className="ajuste-cadastro">
                            <div className="input-field col s12">
                               <p><input id="user" type="text" className="validate" 
                               onChange={(event) => {
                                   setUser(event.target.value);
                               }} 
                               /></p>
                                <label htmlFor="user">Usuario</label>
                            </div>
                            </div>
                            <div className="ajuste-cadastro">
                            <div className="input-field col s12">
                                <p><input id="pass" type="password" className="validate"
                                onChange={(event) => {
                                    setPass(event.target.value);
                                }}
                                /></p>
                                <label htmlFor="pass">Senha</label>
                            </div>
                            </div>
                            <div className="ajuste-cadastro">
                            <div className="input-field col s12">
                                <p><input id="rpass" type="password" className="validate"/></p>
                                <label htmlFor="rpass">Confirmar senha</label>
                            </div>
                            </div>
                            <div className="ajuste-cadastro">
                            <div className="input-field col s12">
                                <p><input id="email" type="email" id="" className="validate"
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                                /></p>
                                <label htmlFor="email">E-mail</label>
                            </div>
                            </div>
                            <p><a href="/login" className="waves-effect waves-light btn grey black-text"><i className="material-icons left">person</i>Fazer login</a></p>
                            <p><a onClick={adiciona} className="waves-effect waves-light btn grey black-text" id="registrar"><i className="material-icons left">folder_shared</i>Cadastrar</a></p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Cadastro;