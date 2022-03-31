import React from "react"

export default class Filtro extends React.Component{
    state={
        inputValorMaximo: 1000,
        inputValorMinimo: 100,
        inputBuscaPorNome: 'Produto'
    }

  onChangeInputValorMinimo = (event) => {
    this.setState({ inputValorMinimo: event.target.value })
  }
  onChangeInputValorMaximo = (event) => {
    this.setState({ inputValorMinimo: event.target.value })
  }
  onChangeInputBuscaPorNome = (event) => {
    this.setState({ inputBuscaPorNome: event.target.value })
  }

  render () {
      return (
          <>
            <lable>
              Valor mínimo:
              <input
                value={this.state.inputValorMinimo}
                type="number"
                onChange={this.onChangeInputValorMinimo}
              />
            </lable>
            <br />
            <lable>
              Valor máximo:
              <input
                value={this.state.inputValorMaximo}
                type="number"
                onChange={this.onChangeInputValorMaximo}
              />
            </lable>
            <br />
            <lable>
              Busca por nome:
              <input
                value={this.state.inputBuscaPorNome}
                type="text"
                onChange={this.onChangeInputBuscaPorNome}
              />
            </lable>
          </>
      )
  }
}
