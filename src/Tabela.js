import React, { Component, Fragment } from 'react';

class Tabela extends Component {
  render() {
    const { livros, removerAction } = this.props;
    return (
      <Fragment>
        <table className="highlight centered">
          <TabelaHeader />
          <TabelaBody livros={livros} removerAction={removerAction} />
        </table>
      </Fragment>
    );
  };
}

function TabelaHeader() {
  return (
    <thead>
      <tr>
        <th>Autor</th>
        <th>Livro</th>
        <th>Preço</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
}

function TabelaBody(props) {
  const livros = props.livros.map((livro, index) => {
    return (
      <tr key={index}>
        <td>{livro.autor}</td>
        <td>{livro.titulo}</td>
        <td>{livro.preco}</td>
        <td><button onClick={() => {
          props.removerAction(index);
        }} className="waves-effect waves-light btn purple darken-1">Remover</button></td>
      </tr>
    );
  });
  return (
    <tbody>
      {livros}
    </tbody>
  );
}





export default Tabela;