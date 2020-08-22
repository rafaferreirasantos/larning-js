import React, { Component } from 'react';

class Formulario extends Component {

  constructor(props) {
    super(props);

    this.stateInicial = {
      autor: '',
      titulo: '',
      preco: '',
    }

    this.state = this.stateInicial;
  }

  inputListener = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  submitForm = () => {
    this.props.inserirAction(this.state);
    this.setState(this.stateInicial);
  }

  render() {
    const { autor, titulo, preco } = this.state;
    return (
      <form>
        <div className="row">
          <div className="input-field col s4">
            <label htmlFor="autor">Autor</label>
            <input type="text" name="autor" id="autor" value={autor} onChange={this.inputListener} />
          </div>
          <div className="input-field col s4">
            <label htmlFor="titulo">Título</label>
            <input type="text" name="titulo" id="titulo" value={titulo} onChange={this.inputListener} />
          </div>
          <div className="input-field col s4">
            <label htmlFor="preco">Preço</label>
            <input type="text" name="preco" id="preco" value={preco} onChange={this.inputListener} />
          </div>
        </div>
        <div className="row">
          <div className="col s12 center">
            <button type="button" className="waves-effect waves-light center btn purple darken-1 btn-large" onClick={this.submitForm}>Salvar</button>
          </div>
        </div>
      </form>
    );
  }
}
export default Formulario;