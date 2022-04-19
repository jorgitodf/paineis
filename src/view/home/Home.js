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
        <div className="mt-2 mt-md-2 home">
          <div class="d-flex justify-content-center bd-highlight">
            <div class="p-2 bd-highlight">
              <Link to="/alliedit">
                <button type="button" class="btn btn-secondary btn-lg">AlliedIT</button>
              </Link>
            </div>  
            <div class="p-2 bd-highlight">
              <Link to="/brasil21">
                <button type="button" class="btn btn-secondary btn-lg">Brasil 21</button>
              </Link>
            </div> 
            <div class="p-2 bd-highlight">
              <Link to="/cimed">
                <button type="button" class="btn btn-secondary btn-lg">Cimed</button>
              </Link>
            </div> 
            <div class="p-2 bd-highlight">
              <Link to="/gjp">
                <button type="button" class="btn btn-secondary btn-lg">GJP</button>
              </Link>
            </div>   
            <div class="p-2 bd-highlight">
              <Link to="/golden">
                <button type="button" class="btn btn-secondary btn-lg">Golden</button>
              </Link>
            </div>   
            <div class="p-2 bd-highlight">
              <Link to="/mundial">
                <button type="button" class="btn btn-secondary btn-lg">Mundial</button>
              </Link>
            </div>                                   
          </div>

        </div>
      )
    } else if (username === 'gerenciamanutencao@complexobrasil21.com.br') {
      return (
        <div className="mt-2 mt-md-2">
          <iframe src="https://app.powerbi.com/view?r=eyJrIjoiNWViMDFhMmQtMWI0Mi00ODU4LWEyOTEtYWJkMjA0MjQ5MGIyIiwidCI6IjFlNTk2ZmJkLWUzNWQtNDQzNS05ZWI2LTU1NjkwYmNlZGUwNiJ9" 
          width={1360} height={640} frameborder={0} allowFullScreen={true}></iframe>
        </div>
      )  
    } else if (username === 'diretoria@complexobrasil21.com.br') {
      return (
        <div className="mt-2 mt-md-2">
          <iframe src="https://app.powerbi.com/view?r=eyJrIjoiZTNmZDQ1ZTItYzFjMy00Y2FhLWFhOWYtN2E3MTcwN2NhZmJhIiwidCI6IjFlNTk2ZmJkLWUzNWQtNDQzNS05ZWI2LTU1NjkwYmNlZGUwNiJ9" 
          width={1360} height={640} frameborder={0} allowFullScreen={true}></iframe>
        </div>
      )  
    } else if (username === 'compras@complexobrasil21.com.br') {
      return (
        <div className="mt-2 mt-md-2">
          <iframe src="https://app.powerbi.com/view?r=eyJrIjoiZTIyNzY2YzMtZGUzYS00Yzk0LTg2OWEtNDZjZTM5Y2QyZDY5IiwidCI6IjFlNTk2ZmJkLWUzNWQtNDQzNS05ZWI2LTU1NjkwYmNlZGUwNiJ9" 
          width={1360} height={640} frameborder={0} allowFullScreen={true}></iframe>
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
