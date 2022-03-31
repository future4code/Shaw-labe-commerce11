import React from 'react'
import styled from 'styled-components'
import Amor from './components/img/amor2.jpg'
import Felicidade from './components/img/felicidade.webp'
import Imortalidade from './components/img/imortalidade.jpg'
import Filtro from './Filtro'

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

const FiltroStyled = styled.h3`
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
  img {
    width: 240px;
    height: 280px;
  }
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
`

export default class App extends React.Component {
  state = {
    produtos: [
    { produto: 'Amor', preco: 1.00, id:Date.now() },
    { produto: 'Felicidade', preco: 1.00, id: Date.now() },
    { produto: 'Imortalidade', preco: 1000000000000.00, id: Date.now() }
  ]
  }

  // addCarrinho = () => {
    
  // }

  render() {
    return (
      <Principal>
        <Main>
          <Caixa>
            <FiltroStyled>Filtro</FiltroStyled>
            <Filtro/>
          </Caixa>
          <Ordenador>
            <Header>
              <div>Quantidade de produtos: 2</div>
              <div>
                Ordenação:
                <select>
                  <option>Crescente</option>
                  <option>Decrescente</option>
                </select>
              </div>
            </Header>
            <Produtos>
              <Caixinha>
                <img src={Amor} />
                <label>
                  Amor <br />
                  R$ 1,00
                </label>
                <br />
                <button>Adicionar ao carrinho</button>
              </Caixinha>
              <Caixinha>
                <img src={Felicidade} />
                <label>
                  Felicidade <br />
                  R$ 1,00
                </label>{' '}
                <br />
                <button>Adicionar ao carrinho</button>
              </Caixinha>
              <Caixinha>
                <img src={Imortalidade} />
                <label>
                  Imortalidade <br />
                  R$ 1000000000000,00
                </label>
                <button>Adicionar ao carrinho</button>
              </Caixinha>
            </Produtos>
          </Ordenador>
          <Caixa>
            <label>
              <h2>Carrinho</h2>
            </label>
            <Item>
          
              <p value=''></p>
              <p value=''></p>
              <button>Adicionar ao carrinho</button> 
            </Item>
          </Caixa>
        </Main>
      </Principal>
    )
  }
}
