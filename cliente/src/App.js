import React from 'react';
import Headers from './Headers';
import Footer from './Footer';
import Routes from './routes';
import './estilo.css';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

class App extends React.Component{

  componentDidMount() {
    const M = window.M;
    M.AutoInit();
  };

  render(){
    return (
      <div>
        <Headers />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
