import React from "react"; 
import styled from 'styled-components'
import Filtro from "./Filtro";

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
  height: 500px;
  margin: 4%;
  padding: 4%;
`

const Titulo = styled.h3`
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 450px;
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

  render() {
    return (
      <Principal>
        <Main>
          <Caixa>
            <Titulo>Filtro</Titulo>
            <Filtro/>
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
                <img src=""/>
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