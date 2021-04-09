import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <footer className="page-footer grey">
            <div className="container">
              <div className="row">
                <div className="col l6 s12">
                  <h5 className="white-text">Loja X</h5>
                  <p className="grey-text text-lighten-4">Trabalhamos com seriedade!</p>
                </div>
                <div className="col l4 offset-l2 s12">
                  <h5 className="white-text">Redes Sociais</h5>
                  <ul>
                    <li><a className="grey-text text-lighten-3" href="#!">Instagram</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Twitter</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">WhatsApp</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container">
              © 2021 Todos os direitos reservados
              <a className="grey-text text-lighten-4 right" href="#!">Materialize</a>
              </div>
            </div>
          </footer>
        );
    }
}

export default Footer;