import React from "react"; 
import styled from 'styled-components'

const Main = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 18%;
  margin: 0;
  row-gap: 3%;
  column-gap: 1%;
`

const Principal = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
`

const Caixa = styled.div`
  border: 1px solid black;
  height: 400px;
  margin: 4%;
  padding: 4%;
`

const Filtro = styled.h3`
  margin-top: 5%;
  margin-bottom: 5%;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2%;
  margin-bottom: 2%;
`

const Ordenador = styled.div`
  margin: 2%;
`

const Produtos = styled.div`
  margin: 1%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 350px;
  column-gap: 1%;
`

const Caixinha = styled.div`
  border: 1px solid black;  

`

export default class App extends React.Component {
  state={
    valorMinimo: 0,
    valorMaximo: 0,
    buscaPorNome: '',
    inputValorMaximo: 1000,
    inputValorMinimo: 100,
    inputBuscaPorNome: 'Produto'
  }

  onChangeInputValorMinimo = (event) => {
    this.setState({inputValorMinimo: event.target.value})
  }
  onChangeInputValorMaximo = (event) => {
    this.setState({inputValorMinimo: event.target.value})
  }
  onChangeInputBuscaPorNome = (event) => {
    this.setState({inputBuscaPorNome: event.target.value})
  }

  render() {
    return (
      <Principal>
        <Main>
          <Caixa>
            <Filtro>Filtro</Filtro>
            <lable>
              Valor mínimo:
              <input
                value={this.state.inputValorMinimo}
                type='number'
                onChange={this.onChangeInputValorMinimo}
              />
            </lable><br/>
            <lable>
              Valor máximo:
              <input
                value={this.state.inputValorMaximo}
                type='number'
                onChange={this.onChangeInputValorMaximo}
              />
            </lable><br/>
            <lable>
              Busca por nome:
              <input
                value={this.state.inputBuscaPorNome}
                type='text'
                onChange={this.onChangeInputBuscaPorNome}
              />
            </lable>
          </Caixa>
          <Ordenador>
            <Header>
              <div>
                Quantidade de produtos: 2
              </div>
              <div>
                Ordenação:
                <select>
                  <option

                  >Crescente</option>
                  <option

                  >Decrescente</option>
                </select>
              </div>
            </Header>
            <Produtos>
              <Caixinha>

              </Caixinha>
              <Caixinha>

              </Caixinha>
              <Caixinha>

              </Caixinha>
            </Produtos>
          </Ordenador>
          <Caixa>
            hello world
          </Caixa>
        </Main>
      </Principal>
    )
  }
}