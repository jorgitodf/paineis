import React, { Component } from 'react'
import {Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    window.onunload = function(e) {
        localStorage.clear();
    };
    let username = localStorage.getItem('username');
    if (username === 'tarcisio.belo@alliedit.com.br' || username === 'katielle.caetano@alliedit.com.br'
    || username === 'larissa.castelo@alliedit.com.br' || username === 'gloria.silva@alliedit.com.br' 
    || username === 'luiz.vilela@alliedit.com.br' || username === 'jorgito.paiva@alliedit.com.br') {
      return (
        <div className="mt-2 mt-md-2">
          <div class="d-flex justify-content-center bd-highlight">
            <div class="p-2 bd-highlight">
              <Link to="/alliedit">
                  <span className="card" style={{"display": "block"}}>
                    AlliedIT
                  </span>
              </Link>
            </div>  
            <div class="p-2 bd-highlight">
              <Link to="/brasil21">
                  <span className="card" style={{"display": "block"}}>
                    Brasil 21
                  </span>
              </Link>
            </div> 
            <div class="p-2 bd-highlight">
              <Link to="/cimed">
                  <span className="card" style={{"display": "block"}}>
                    Cimed
                  </span>
              </Link>
            </div> 
            <div class="p-2 bd-highlight">
              <Link to="/gjp">
                  <span className="card" style={{"display": "block"}}>
                    GJP
                  </span>
              </Link>
            </div>   
            <div class="p-2 bd-highlight">
              <Link to="/golden">
                  <span className="card" style={{"display": "block"}}>
                    Golden
                  </span>
              </Link>
            </div>   
            <div class="p-2 bd-highlight">
              <Link to="/mundial">
                  <span className="card" style={{"display": "block"}}>
                    Mundial
                  </span>
              </Link>
            </div>                                   
          </div>

        </div>
      )
    } else if (username === 'gerenciamanutencao@complexobrasil21.com.br') {
      return (
        <div className="mt-2 mt-md-2">
          <h2><strong>Usuário ainda não possui permissão para visualizar o Painel de Bi</strong></h2>
        </div>
      )  
    } else {
      return (
        <div class="jumbotron jumbotron-fluid">
          <div class="container mt-2 mt-md-2">
            <h1 class="display-4">Sem Permissão!!!</h1>
            <p class="lead">O seu usuário ainda não possui permissão para acessar o(s) painel(is) de BI, 
            favor enviar um <a href="mailto:jorgito.paiva@alliedit.com.br?subject=Permissão Acesso Painel BI" title="">E-mail</a> para o administrador do sistema, informando o seu nome, 
            o e-mail cadastrado e qual painel de BI deseja acessar.</p>
          </div>
        </div>
      )  
    }
  }
}

export default Home
