import React from 'react';
import Tabela from './Tabela';

class Usuario extends React.Component{

  constructor(){
    super();
    this.state=({
      db: []
    })
    this.mostraUsuarios();
  }

  mostraUsuarios(){
    fetch("http://localhost/siteestudo/src/controle/")
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState ({
        db:responseJson
      });
      console.log(this.state.db);
    })
  }

render(){
    return(
      <div>
        <Tabela arrayUsuarios = {this.state.db} />
      </div>
    );
};
};

export default Usuario;