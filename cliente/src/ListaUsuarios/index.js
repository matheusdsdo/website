import React from 'react';
import Axios from 'axios';
import { useState } from "react";



function Usuarios(){
/*
    const [codigo,setCodigo] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
  */  
    const [listaUsuarios, setListaUsuarios] = useState([]);

    const deletaUsuario = (id) => {
        const ip = 'http://localhost:3001/deletausuario/'+id;
        Axios.delete(ip).then((response) => {
            setListaUsuarios(
                listaUsuarios.filter((val) => {
                    return val.id != id
                })
            )
        })
    }
    const getListaUsuarios = () =>{
        Axios.get('http://localhost:3001/listausuarios').then((response) => {
            setListaUsuarios(response.data);
        })
    }
    return(
        <div>
            <div>
                <div className="section no-pad-bot">
                        {getListaUsuarios()}
                    <div className="container">
                        <div className="row center">
                            <table>
                                <thead>
                                <tr>
                                    <th>Codigo</th>
                                    <th>Nome</th>
                                    <th>Senha</th>
                                    <th>E-Mail</th>
                                    <th>Excluir</th>
                                </tr>
                                </thead>
                                <tbody>    
                                {listaUsuarios.map((val,key) => { return (
                                <tr>      
                                    <td>{val.codigo}</td>
                                    <td>{val.usuario}</td>
                                    <td>{val.senha}</td>
                                    <td>{val.email}</td>
                                    <td><button onClick={() => {
                                        deletaUsuario(val.codigo)
                                    }}>Excluir</button> </td>
                                </tr>
                                )
                                })}  
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Usuarios;