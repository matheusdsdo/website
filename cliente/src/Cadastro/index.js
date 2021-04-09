import React, { useState } from 'react';
import imgCadastro from '../img/MEU-CADASTRO.png';
import axios from 'axios';

function Cadastro(){

    const[user, setUser] = useState("");
    const[pass, setPass] = useState("");
    const[email, setEmail] = useState("");

    //const res = await axios.post('https:sample-endpoint.com/data')



    const adiciona = () => {
        console.log('Usuario: ' , user)
        console.log('Senha: ' , pass)
        console.log('E-Mail: ' , email)

        axios.post('https://localhost:3001/adicionar', {
            Nome: user,
            Senha: pass,
            Email: email
          })
          .then(function (response) {
            console.log(response);
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
                                <label for="user">Usuario</label>
                            </div>
                            </div>
                            <div className="ajuste-cadastro">
                            <div className="input-field col s12">
                                <p><input id="pass" type="password" className="validate"
                                onChange={(event) => {
                                    setPass(event.target.value);
                                }}
                                /></p>
                                <label for="pass">Senha</label>
                            </div>
                            </div>
                            <div className="ajuste-cadastro">
                            <div className="input-field col s12">
                                <p><input id="rpass" type="password" className="validate"/></p>
                                <label for="rpass">Confirmar senha</label>
                            </div>
                            </div>
                            <div className="ajuste-cadastro">
                            <div class="input-field col s12">
                                <p><input id="email" type="email" id="" class="validate"
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                                /></p>
                                <label for="email">E-mail</label>
                            </div>
                            </div>
                            <p><a href="/login" className="waves-effect waves-light btn grey black-text"><i class="material-icons left">person</i>Fazer login</a></p>
                            <p><a onClick={adiciona} className="waves-effect waves-light btn grey black-text" id="registrar"><i class="material-icons left">folder_shared</i>Cadastrar</a></p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Cadastro;