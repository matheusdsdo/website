import React from 'react';

export default class Tabela extends React.Component{
    render(){
        return(
            <div>
            <div>
            <div className="section no-pad-bot">
                <div className="container">
                    <div className="row center">
                        <table>
                            <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Nome</th>
                                <th>Senha</th>
                                <th>E-Mail</th>
                            </tr>
                            </thead>
                            <tbody>    
                            {this.props.arrayUsuarios.map(
                                row =>     
                            <tr>      
                                <td>{row.codigo}</td>
                                <td>{row.usuario}</td>
                                <td>{row.senha}</td>
                                <td>{row.email}</td>
                            </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
       </div>
                
            </div>
        )
    }
}