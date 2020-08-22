import React, { Component, Fragment } from 'react';
import Tabela from './Tabela'
import Form from './Formulario'
import Header from './Header'
import 'materialize-css/dist/css/materialize.min.css'

class App extends Component {
  state = {
    livros: [
      {
        autor: 'Rafael Santos',
        titulo: 'Aprendendo JavaScript',
        preco: 199.9
      },
      {
        autor: 'Ricardo Santos',
        titulo: 'Aprendendo Python',
        preco: 12.9
      },
      {
        autor: 'Bruno Santos',
        titulo: 'Cortes Femininos',
        preco: 56.9
      },
      {
        autor: 'Beiço Santos',
        titulo: 'A Arte da Destilaria',
        preco: 79.9
      },
    ],
  };

  removerLivro = (indexRemover) => {
    const { livros } = this.state;
    this.setState(
      {
        livros: livros.filter((livro, index) => {
          return (
            indexRemover !== index
          );
        })
      }
    );
  }

  submitListener = (livro) => {
    this.setState({ livros: [...this.state.livros, livro] })
  };

  render() {
    return (
      <div className="App" >
        <Fragment>
          <Header />
          <Tabela livros={this.state.livros} removerAction={this.removerLivro} />
          <Form inserirAction={this.submitListener} />
        </Fragment>
      </div>
    );
  }
};



export default App;
